import "server-only";

import {
  createHmac,
  pbkdf2Sync,
  timingSafeEqual,
  createHash,
} from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "__Host-ms_staff_session";
const SESSION_SECONDS = 8 * 60 * 60;
const HASH_ITERATIONS = 310_000;

type StaffUser = {
  username: string;
  passwordHash: string;
  displayName?: string;
};

export type StaffSession = {
  username: string;
  displayName: string;
  expiresAt: number;
};

function getUsers(): StaffUser[] {
  try {
    const encoded = process.env.STAFF_USERS_BASE64;
    const source = encoded
      ? Buffer.from(encoded, "base64url").toString("utf8")
      : (process.env.STAFF_USERS_JSON ?? "[]");
    const users = JSON.parse(source) as StaffUser[];
    return users.filter(
      (user) =>
        typeof user.username === "string" &&
        typeof user.passwordHash === "string" &&
        user.passwordHash.startsWith("pbkdf2$"),
    );
  } catch {
    console.error("Die Mitarbeiterkonten sind ungültig konfiguriert");
    return [];
  }
}

function verifyPassword(password: string, encodedHash: string) {
  const [algorithm, iterationsValue, salt, expected] = encodedHash.split("$");
  const iterations = Number(iterationsValue);
  if (
    algorithm !== "pbkdf2" ||
    !Number.isSafeInteger(iterations) ||
    iterations < HASH_ITERATIONS ||
    !salt ||
    !expected
  ) {
    return false;
  }

  try {
    const expectedBuffer = Buffer.from(expected, "base64url");
    const actualBuffer = pbkdf2Sync(
      password,
      Buffer.from(salt, "base64url"),
      iterations,
      expectedBuffer.length,
      "sha256",
    );
    return timingSafeEqual(expectedBuffer, actualBuffer);
  } catch {
    return false;
  }
}

function getSessionSecret() {
  const secret = process.env.STAFF_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("STAFF_SESSION_SECRET ist nicht sicher konfiguriert");
  }
  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("base64url");
}

function userVersion(user: StaffUser) {
  return createHash("sha256")
    .update(user.passwordHash)
    .digest("base64url")
    .slice(0, 20);
}

export function verifyStaffCredentials(username: string, password: string) {
  const normalizedUsername = username.trim().toLocaleLowerCase("de-DE");
  const user = getUsers().find(
    (entry) => entry.username.toLocaleLowerCase("de-DE") === normalizedUsername,
  );

  // Eine vollständige PBKDF2-Berechnung findet auch bei unbekannten Konten statt.
  const dummy =
    "pbkdf2$310000$MDAwMDAwMDAwMDAwMDAwMA$" +
    "MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA";
  if (!verifyPassword(password, user?.passwordHash ?? dummy) || !user) return null;
  return user;
}

export function createStaffSession(user: StaffUser) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = Buffer.from(
    JSON.stringify({
      username: user.username,
      displayName: user.displayName ?? user.username,
      version: userVersion(user),
      expiresAt,
    }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function verifySessionToken(token: string): StaffSession | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expectedSignature = sign(payload);
  const actual = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      username: string;
      displayName: string;
      version: string;
      expiresAt: number;
    };
    if (!data.expiresAt || data.expiresAt <= Math.floor(Date.now() / 1000)) {
      return null;
    }
    const user = getUsers().find((entry) => entry.username === data.username);
    if (!user || userVersion(user) !== data.version) return null;

    return {
      username: data.username,
      displayName: data.displayName,
      expiresAt: data.expiresAt,
    };
  } catch {
    return null;
  }
}

export async function getStaffSession() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export const staffSessionCookie = {
  name: COOKIE_NAME,
  maxAge: SESSION_SECONDS,
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "strict" as const,
    path: "/",
  },
};
