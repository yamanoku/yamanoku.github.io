const KEEP_HOSTNAME_PATTERNS = ["www.*", "*.vercel.app"] as const;

function matchesKeepPattern(hostname: string, pattern: string): boolean {
  if (pattern.startsWith("*.")) {
    return hostname.endsWith(pattern.slice(1));
  }
  if (pattern.endsWith("*")) {
    return hostname.startsWith(pattern.slice(0, -1));
  }
  return hostname === pattern;
}

export function toApexDomain(hostname: string): string {
  if (
    KEEP_HOSTNAME_PATTERNS.some((pattern) =>
      matchesKeepPattern(hostname, pattern)
    )
  ) {
    return hostname;
  }
  const parts = hostname.split(".");
  if (parts.length <= 2) {
    return hostname;
  }
  return parts.slice(-2).join(".");
}

