import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { ContactEnv, OutboundEmail } from "./env";
import { handleContact } from "./handler";
import { TURNSTILE_TEST_SECRET } from "./turnstile";

const TOKEN = "token-value";

function env(overrides: Partial<ContactEnv> = {}): ContactEnv & {
  sent: OutboundEmail[];
} {
  const sent: OutboundEmail[] = [];
  return {
    sent,
    CONTACT_TO: "0910yama@gmail.com",
    CONTACT_FROM: "contact@yamanoku.net",
    CONTACT_RUNTIME: "production",
    TURNSTILE_SECRET: "production-secret",
    EMAIL: {
      async send(message) {
        sent.push(message);
        return { messageId: "msg-1" };
      }
    },
    CONTACT_RATE_LIMIT: {
      async limit() {
        return { success: true };
      }
    },
    ...overrides
  };
}

function post(
  body: unknown,
  init: { origin?: string; url?: string; accept?: string } = {}
): Request {
  return new Request(init.url ?? "https://contact.yamanoku.net/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: init.accept ?? "application/json",
      origin: init.origin ?? "https://yamanoku.net",
      "cf-connecting-ip": "203.0.113.5"
    },
    body: JSON.stringify(body)
  });
}

const validBody = {
  name: "大山 奥人",
  email: "guest@example.com",
  message: "ポートフォリオの件で連絡しました。",
  turnstileToken: TOKEN
};

describe("handleContact", () => {
  it("sends mail to the pinned address and sets reply-to", async () => {
    const worker = env();
    const response = await handleContact(post(validBody), worker, {
      verify: async () => ({
        success: true,
        action: "contact",
        hostname: "yamanoku.net"
      })
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(worker.sent.length, 1);
    const mail = worker.sent[0];
    assert.ok(mail);
    assert.equal(mail.to, "0910yama@gmail.com");
    assert.deepEqual(mail.from, {
      email: "contact@yamanoku.net",
      name: "yamanoku.net"
    });
    assert.deepEqual(mail.replyTo, {
      email: "guest@example.com",
      name: "大山 奥人"
    });
    assert.match(mail.text, /ポートフォリオの件/);
  });

  it("escapes html in the message", async () => {
    const worker = env();
    await handleContact(
      post({
        ...validBody,
        message: `<script>alert("x")</script>`
      }),
      worker,
      {
        verify: async () => ({
          success: true,
          action: "contact",
          hostname: "www.yamanoku.net"
        })
      }
    );
    assert.match(worker.sent[0]?.html ?? "", /&lt;script&gt;/);
    assert.doesNotMatch(worker.sent[0]?.html ?? "", /<script>/);
  });

  it("rejects a turnstile result for another action or hostname", async () => {
    const worker = env();
    const response = await handleContact(post(validBody), worker, {
      verify: async () => ({
        success: true,
        action: "login",
        hostname: "yamanoku.net"
      })
    });
    assert.equal(response.status, 403);
    assert.equal(worker.sent.length, 0);
  });

  it("rejects the test secret on the public host", async () => {
    let called = false;
    const worker = env({ TURNSTILE_SECRET: TURNSTILE_TEST_SECRET });
    const response = await handleContact(post(validBody), worker, {
      verify: async () => {
        called = true;
        return { success: true, hostname: "example.com" };
      }
    });
    assert.equal(response.status, 403);
    assert.equal(called, false);
    assert.equal(worker.sent.length, 0);
  });

  it("accepts the test secret on localhost and does not send mail", async () => {
    const worker = env({
      TURNSTILE_SECRET: TURNSTILE_TEST_SECRET,
      CONTACT_RUNTIME: "local"
    });
    const response = await handleContact(
      post(validBody, {
        url: "http://127.0.0.1:8787/",
        origin: "http://localhost:4321"
      }),
      worker,
      { verify: async () => ({ success: true, hostname: "example.com" }) }
    );
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true, delivery: "skipped" });
    assert.equal(worker.sent.length, 0);
  });

  it("pretends a filled honeypot succeeded", async () => {
    const worker = env();
    const response = await handleContact(
      post({ ...validBody, company: "acme" }),
      worker,
      { verify: async () => ({ success: true }) }
    );
    assert.equal(response.status, 200);
    assert.equal(worker.sent.length, 0);
  });

  it("rejects an invalid email before turnstile", async () => {
    let called = false;
    const response = await handleContact(
      post({ ...validBody, email: "not-an-email" }),
      env(),
      {
        verify: async () => {
          called = true;
          return { success: true };
        }
      }
    );
    assert.equal(response.status, 400);
    assert.equal(called, false);
  });

  it("returns 429 when the rate limit is spent", async () => {
    const worker = env({
      CONTACT_RATE_LIMIT: {
        async limit() {
          return { success: false };
        }
      }
    });
    const response = await handleContact(post(validBody), worker, {
      verify: async () => ({
        success: true,
        action: "contact",
        hostname: "yamanoku.net"
      })
    });
    assert.equal(response.status, 429);
    assert.equal(worker.sent.length, 0);
  });

  it("hides a send failure from the response body", async () => {
    const worker = env({
      EMAIL: {
        async send() {
          throw Object.assign(new Error("smtp"), {
            code: "E_SENDER_NOT_VERIFIED"
          });
        }
      }
    });
    const response = await handleContact(post(validBody), worker, {
      verify: async () => ({
        success: true,
        action: "contact",
        hostname: "yamanoku.net"
      })
    });
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), {
      ok: false,
      error: "unavailable"
    });
  });

  it("allows the portal origin and rejects another site", async () => {
    const worker = env();
    const ok = await handleContact(
      new Request("https://contact.yamanoku.net/", {
        method: "OPTIONS",
        headers: { origin: "https://yamanoku.net" }
      }),
      worker
    );
    assert.equal(ok.status, 204);
    assert.equal(
      ok.headers.get("access-control-allow-origin"),
      "https://yamanoku.net"
    );
    const blocked = await handleContact(
      post(validBody, { origin: "https://example.com" }),
      worker,
      {
        verify: async () => ({
          success: true,
          action: "contact",
          hostname: "yamanoku.net"
        })
      }
    );
    assert.equal(blocked.headers.get("access-control-allow-origin"), null);
  });
});
