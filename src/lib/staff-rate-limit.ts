type Entry = { attempts: number; resetAt: number };

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const globalStore = globalThis as typeof globalThis & {
  mariaSchneeLoginAttempts?: Map<string, Entry>;
};
const attempts =
  globalStore.mariaSchneeLoginAttempts ?? new Map<string, Entry>();
globalStore.mariaSchneeLoginAttempts = attempts;

export function checkLoginRateLimit(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { attempts: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  entry.attempts += 1;
  attempts.set(key, entry);
  return {
    allowed: entry.attempts <= MAX_ATTEMPTS,
    retryAfter: Math.ceil((entry.resetAt - now) / 1000),
  };
}

export function clearLoginRateLimit(key: string) {
  attempts.delete(key);
}
