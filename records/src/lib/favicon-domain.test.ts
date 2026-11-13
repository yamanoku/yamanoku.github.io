import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { faviconPublicPath, registrableDomain } from "./favicon-domain.ts";

describe("registrableDomain", () => {
  it("keeps the label under a multi-level public suffix", () => {
    assert.equal(registrableDomain("tokyo.fec.or.jp"), "fec.or.jp");
    assert.equal(registrableDomain("www.example.co.uk"), "example.co.uk");
  });

  it("keeps the registrable name under a private suffix", () => {
    assert.equal(
      registrableDomain("react-tokyo.vercel.app"),
      "react-tokyo.vercel.app"
    );
    assert.equal(registrableDomain("yamanoku.github.io"), "yamanoku.github.io");
  });

  it("collapses ordinary subdomains, including www", () => {
    assert.equal(registrableDomain("www.example.com"), "example.com");
    assert.equal(registrableDomain("records.yamanoku.net."), "yamanoku.net");
  });

  it("ignores hosts that have no registrable domain", () => {
    assert.equal(registrableDomain("localhost"), null);
    assert.equal(registrableDomain("127.0.0.1"), null);
    assert.equal(registrableDomain(""), null);
  });
});

describe("faviconPublicPath", () => {
  it("points at the same-origin file for the registrable domain", () => {
    assert.equal(
      faviconPublicPath("tokyo.fec.or.jp"),
      "/favicons/fec.or.jp.png"
    );
  });
});
