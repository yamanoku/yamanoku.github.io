import assert from "node:assert/strict";
import { describe, it } from "node:test";
import records from "../../../records/src/data/records.json" with {
  type: "json"
};
import siteContent from "../../../src/data/site-content.json" with {
  type: "json"
};
import writings from "../../../src/data/writings.json" with { type: "json" };
import type { SiteContent, StageRecord, Writing } from "../src/model.js";
import {
  addJournalYear,
  addLink,
  addStage,
  addWriting,
  parseRubyParts,
  setProfile,
  setTranslation
} from "../src/mutations.js";

describe("writing mutations", () => {
  it("adds a writing, sorts it, and keeps exactly five items", () => {
    const next = addWriting(writings as Writing[], {
      title: "New article",
      url: "https://example.com/new",
      datetime: "2099-01-01T00:00:00+09:00"
    });

    assert.equal(next.length, 5);
    assert.equal(next[0].title, "New article");
    assert.equal(
      next.some((item) => item.title === writings.at(-1)?.title),
      false
    );
  });

  it("rejects a duplicate URL", () => {
    assert.throws(
      () =>
        addWriting(writings as Writing[], {
          ...writings[0],
          title: "Duplicate"
        }),
      /同じURL/
    );
  });
});

describe("stage mutations", () => {
  it("supports future events and multiple resources without losing data", () => {
    const record: StageRecord = {
      date: "2099-12-01",
      event: "Future event",
      resources: [
        { title: "Slides", url: "https://example.com/slides" },
        { title: "Video", url: "https://example.com/video" }
      ]
    };
    const next = addStage(records as StageRecord[], record);

    assert.deepEqual(next[0], record);
    assert.equal(next[0].resources.length, 2);
  });

  it("rejects duplicate date and event pairs", () => {
    assert.throws(
      () => addStage(records as StageRecord[], records[0] as StageRecord),
      /既にあります/
    );
  });
});

describe("site content mutations", () => {
  it("keeps Japanese and English translations paired", () => {
    const next = setTranslation(
      siteContent as SiteContent,
      "test.example",
      "テスト",
      "Test"
    );
    assert.equal(next.translations.ja["test.example"], "テスト");
    assert.equal(next.translations.en["test.example"], "Test");
  });

  it("normalizes and sorts journal years", () => {
    const next = addJournalYear(siteContent as SiteContent, 2030);
    assert.equal(next.journal.years[0], 2030);
    assert.throws(() => addJournalYear(next, 2030), /既にあります/);
  });

  it("uses rel-me defaults for identity links", () => {
    const next = addLink(siteContent as SiteContent, "rel-me", {
      id: "example",
      title: { ja: "Example", en: "Example" },
      url: "https://example.com/@yamanoku"
    });
    const link = next.links.social.find((item) => item.id === "example");
    assert.equal(link?.visible, false);
    assert.equal(link?.relMe, true);
  });

  it("requires real-name ruby text to match the Japanese value", () => {
    const parts = parseRubyParts(["大山=おおやま", "奥人=おくと"]);
    const next = setProfile(
      siteContent as SiteContent,
      "realName",
      "大山奥人",
      "Okuto Oyama",
      parts
    );
    assert.deepEqual(next.profile.realName.ja.parts, parts);
    assert.throws(
      () =>
        setProfile(
          siteContent as SiteContent,
          "realName",
          "別名",
          "Other",
          parts
        ),
      /一致しません/
    );
  });
});
