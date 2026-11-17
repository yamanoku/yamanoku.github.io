// Mirrors the bindings in cloudflare.config.ts.
export interface ContactEnv {
  EMAIL: {
    send(message: OutboundEmail): Promise<{ messageId: string }>;
  };
  CONTACT_TO: string;
  CONTACT_FROM: string;
  CONTACT_RUNTIME: string;
  TURNSTILE_SECRET: string;
  CONTACT_RATE_LIMIT: {
    limit(options: { key: string }): Promise<{ success: boolean }>;
  };
}

export interface OutboundEmail {
  to: string;
  from: { email: string; name?: string };
  replyTo?: { email: string; name?: string };
  subject: string;
  text: string;
  html: string;
}
