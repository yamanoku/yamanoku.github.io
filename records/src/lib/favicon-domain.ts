import { getDomain } from "tldts";

const SAFE_DOMAIN =
  /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

// eTLD+1, including private suffixes such as vercel.app and github.io.
export function registrableDomain(hostname: string): string | null {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, "");
  if (normalized.length === 0 || normalized.includes("..")) return null;

  const domain = getDomain(normalized, { allowPrivateDomains: true });
  if (domain == null || !SAFE_DOMAIN.test(domain)) return null;
  return domain;
}

export function faviconPublicPath(hostname: string): string | null {
  const domain = registrableDomain(hostname);
  if (domain == null) return null;
  return `/favicons/${domain}.png`;
}
