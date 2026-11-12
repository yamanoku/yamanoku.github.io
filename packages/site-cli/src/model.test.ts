import assert from "node:assert/strict";
import { describe, it } from "node:test";

import records from "../../../records/src/data/records.json" with { type: "json" };
import siteContent from "../../../src/data/site-content.json" with { type: "json" };
import writings from "../../../src/data/writings.json" with { type: "json" };
import works from "../../../works/src/data/works.json" with { type: "json" };
import {
  DataValidationError,
  validateRecords,
  validateSiteContent,
  validateWorks,
  validateWritings
} from "./model.js";

describe("repository data validation", () => {
  it("accepts the checked-in canonical data", () => {
    assert.doesNotThrow(() => validateSiteContent(siteContent));
    assert.doesNotThrow(() => validateWritings(writings));
    assert.doesNotThrow(() => validateRecords(records));
    assert.doesNotThrow(() => validateWorks(works));
  });

  it("requires exactly five writings", () => {
    assert.throws(
      () => validateWritings(writings.slice(0, 4)),
      (error: unknown) =>
        error instanceof DataValidationError &&
        error.issues.some((issue) => issue.includes("必ず5件"))
    );
  });

  it("detects translation key drift", () => {
    const invalid = structuredClone(siteContent);
    delete (invalid.translations.en as Record<string, string>)["heading.basic"];
    assert.throws(
      () => validateSiteContent(invalid),
      (error: unknown) =>
        error instanceof DataValidationError &&
        error.issues.includes(
          "translations.ja/en のキーを完全一致させてください"
        )
    );
  });

  it("rejects records that are not newest-first", () => {
    const invalid = [records[1], records[0], ...records.slice(2)];
    assert.throws(() => validateRecords(invalid), /新しい順/);
  });

  it("rejects a work github URL outside github.com", () => {
    const invalid = structuredClone(works);
    invalid[0].github = "https://example.com/repo";
    assert.throws(
      () => validateWorks(invalid),
      /github はgithub.comのHTTP\(S\) URLにしてください/
    );
  });

  it("rejects duplicate technologies on a work", () => {
    const invalid = structuredClone(works);
    invalid[0].technologies = ["Vue.js", "Vue.js"];
    assert.throws(
      () => validateWorks(invalid),
      /technologies が重複しています/
    );
  });

  it("rejects works that are not in creation order", () => {
    const invalid = structuredClone(works);
    const first = invalid[0];
    invalid[0] = invalid[1];
    invalid[1] = first;
    assert.throws(
      () => validateWorks(invalid),
      /works は作った順にしてください/
    );
  });

  it("rejects works left inside site content", () => {
    const invalid = structuredClone(siteContent) as Record<string, unknown>;
    invalid.works = works;
    assert.throws(
      () => validateSiteContent(invalid),
      /works は works\/src\/data\/works.json に置いてください/
    );
  });

  it("rejects an invalid eventUrl", () => {
    const invalid = structuredClone(records);
    invalid[0] = { ...invalid[0], eventUrl: "not-a-url" };
    assert.throws(
      () => validateRecords(invalid),
      /records\[0\]\.eventUrl はHTTP\(S\) URLにしてください/
    );
  });
});
