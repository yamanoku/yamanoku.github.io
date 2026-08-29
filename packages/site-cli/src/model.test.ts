import assert from "node:assert/strict";
import { describe, it } from "node:test";
import records from "../../../records/src/data/records.json" with {
  type: "json"
};
import siteContent from "../../../src/data/site-content.json" with {
  type: "json"
};
import writings from "../../../src/data/writings.json" with { type: "json" };
import {
  DataValidationError,
  validateRecords,
  validateSiteContent,
  validateWritings
} from "./model.js";

describe("repository data validation", () => {
  it("accepts the checked-in canonical data", () => {
    assert.doesNotThrow(() => validateSiteContent(siteContent));
    assert.doesNotThrow(() => validateWritings(writings));
    assert.doesNotThrow(() => validateRecords(records));
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
});
