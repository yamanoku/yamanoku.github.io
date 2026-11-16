export const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

export const PRODUCTION_HOSTS = new Set(["yamanoku.net", "www.yamanoku.net"]);

export interface TurnstileResult {
  success?: boolean;
  action?: string;
  hostname?: string;
}

export async function verifyTurnstile(options: {
  secret: string;
  token: string;
  remoteIp: string;
}): Promise<TurnstileResult | null> {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: options.secret,
          response: options.token,
          remoteip: options.remoteIp
        }),
        signal: AbortSignal.timeout(10_000)
      }
    );
    if (!response.ok) return null;
    return (await response.json()) as TurnstileResult;
  } catch {
    return null;
  }
}

export function turnstileAccepted(options: {
  secret: string;
  localWorker: boolean;
  result: TurnstileResult | null;
}): boolean {
  const { secret, localWorker, result } = options;
  if (!result?.success) return false;
  if (secret === TURNSTILE_TEST_SECRET) {
    // The test secret always reports hostname example.com and omits action.
    return localWorker && result.hostname === "example.com";
  }
  return (
    result.action === "contact" &&
    typeof result.hostname === "string" &&
    PRODUCTION_HOSTS.has(result.hostname)
  );
}
