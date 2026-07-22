const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const ALLOWED_HOSTNAMES = new Set([
  "mariaschnee-pflege.de",
  "www.mariaschnee-pflege.de",
]);

type TurnstileResponse = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyTurnstile(
  token: string,
  request: Request,
  expectedAction: string,
) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY ist nicht konfiguriert");
    return false;
  }

  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: remoteIp,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) return false;

    const result = (await response.json()) as TurnstileResponse;
    if (
      !result.success ||
      result.action !== expectedAction ||
      !result.hostname ||
      !ALLOWED_HOSTNAMES.has(result.hostname)
    ) {
      console.warn("Turnstile-Prüfung abgelehnt", result["error-codes"]);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile-Prüfung fehlgeschlagen", error);
    return false;
  }
}
