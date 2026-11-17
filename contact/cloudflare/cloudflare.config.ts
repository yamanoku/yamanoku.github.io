import { bindings, defineConfig } from "cf/config";

// Pages projects yamanoku-net and records-yamanoku use the repository root.
// This Worker stays in its own directory and is published only on
// contact.yamanoku.net so it does not replace the portal.
const destinationAddress = "0910yama@gmail.com";
const senderAddress = "contact@yamanoku.net";

export default defineConfig({
  accountId: "1b16f7266470fc5782fd6254ba8efec9",
  worker: {
    name: "yamanoku-contact",
    compatibilityDate: "2026-11-16",
    entrypoint: "./src/index.ts",
    workersDev: false,
    domains: ["contact.yamanoku.net"],
    observability: {
      enabled: true,
      traces: {
        enabled: true
      }
    },
    env: {
      EMAIL: bindings.sendEmail({
        destinationAddress,
        allowedSenderAddresses: [senderAddress]
      }),
      CONTACT_TO: bindings.text(destinationAddress),
      CONTACT_FROM: bindings.text(senderAddress),
      CONTACT_RUNTIME: bindings.text("production"),
      TURNSTILE_SECRET: bindings.secret(),
      CONTACT_RATE_LIMIT: bindings.rateLimit({
        namespace: "27401",
        simple: { limit: 5, period: 60 }
      })
    }
  }
});
