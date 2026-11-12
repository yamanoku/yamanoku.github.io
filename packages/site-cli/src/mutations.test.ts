import assert from "node:assert/strict";
import { describe, it } from "node:test";

import records from "../../../records/src/data/records.json" with { type: "json" };
import siteContent from "../../../src/data/site-content.json" with { type: "json" };
import writings from "../../../src/data/writings.json" with { type: "json" };
import works from "../../../works/src/data/works.json" with { type: "json" };
import type { SiteContent, StageRecord, Work, Writing } from "./model.js";
import {
  addJournalYear,
  addLink,
  addStage,
  addWork,
  addWriting,
  parseRubyParts,
  removeLink,
  removeTranslation,
  removeWork,
  setProfile,
  setTranslation,
  updateLink,
  updateStage,
  updateWork
} from "./mutations.js";

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

  it("sets eventUrl without dropping description or resources", () => {
    const current = records[1] as StageRecord;
    const next = updateStage(
      records as StageRecord[],
      current.date,
      current.event,
      {
        eventUrl: "https://example.com/event"
      }
    );
    const updated = next.find(
      (item) => item.date === current.date && item.event === current.event
    );

    assert.equal(updated?.eventUrl, "https://example.com/event");
    assert.equal(updated?.description, current.description);
    assert.deepEqual(updated?.resources, current.resources);
  });

  it("sets and clears description", () => {
    const current = records[0] as StageRecord;
    const withDescription = updateStage(
      records as StageRecord[],
      current.date,
      current.event,
      { description: "要約テキスト" }
    );
    const described = withDescription.find(
      (item) => item.date === current.date && item.event === current.event
    );
    assert.equal(described?.description, "要約テキスト");

    const cleared = updateStage(withDescription, current.date, current.event, {
      description: undefined
    });
    const afterClear = cleared.find(
      (item) => item.date === current.date && item.event === current.event
    );
    assert.equal(afterClear?.description, undefined);
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

  it("limits rel-me update and remove to identity links", () => {
    const content = siteContent as SiteContent;
    assert.equal(
      content.links.social.find((link) => link.id === "x")?.relMe,
      false
    );
    assert.throws(
      () => removeLink(content, "rel-me", "x"),
      /rel-me のリンクが見つかりません: x/
    );
    assert.throws(
      () =>
        updateLink(content, "rel-me", "x", { url: "https://example.com/x" }),
      /rel-me のリンクが見つかりません: x/
    );

    const updated = updateLink(content, "rel-me", "hollo", {
      url: "https://example.com/hollo"
    });
    assert.equal(
      updated.links.social.find((link) => link.id === "hollo")?.url,
      "https://example.com/hollo"
    );
    const removed = removeLink(content, "rel-me", "hollo");
    assert.equal(
      removed.links.social.some((link) => link.id === "hollo"),
      false
    );
    assert.equal(
      removed.links.social.some((link) => link.id === "x"),
      true
    );
  });

  it("inserts a work in creation order and rejects a duplicate id", () => {
    const current = works as Work[];
    const next = addWork(current, {
      id: "example",
      name: "example",
      github: "https://github.com/yamanoku/example",
      site: "https://example.com",
      description: { ja: "概要", en: "Summary" },
      createdAt: "2010-01-01",
      technologies: ["TypeScript"],
      articles: [{ title: "記事", url: "https://example.com/article" }]
    });
    assert.equal(next[0]?.id, "example");
    assert.deepEqual(next[0]?.technologies, ["TypeScript"]);
    assert.equal(next[0]?.github, "https://github.com/yamanoku/example");
    const cleared = updateWork(next, "example", { github: null, site: "" });
    assert.equal(cleared[0]?.github, undefined);
    assert.equal(cleared[0]?.site, undefined);
    assert.throws(() => addWork(next, next[0]), /同じid/);
  });

  it("re-sorts a work when its creation date changes", () => {
    const current = works as Work[];
    const oldest = current[0];
    const next = updateWork(current, oldest.id, { createdAt: "2099-01-01" });
    assert.equal(next.at(-1)?.id, oldest.id);
    assert.deepEqual(next.at(-1)?.technologies, oldest.technologies);
    const replaced = updateWork(current, oldest.id, {
      technologies: ["Vue.js", "Vite"]
    });
    assert.deepEqual(
      replaced.find((work) => work.id === oldest.id)?.technologies,
      ["Vue.js", "Vite"]
    );
    assert.deepEqual(
      replaced.find((work) => work.id === oldest.id)?.articles,
      oldest.articles
    );
    const removed = removeWork(next, oldest.id);
    assert.equal(
      removed.some((work) => work.id === oldest.id),
      false
    );
  });

  it("rejects removing a translation key that is still referenced", () => {
    const referenced = new Set(["heading.basic"]);
    assert.throws(
      () =>
        removeTranslation(
          siteContent as SiteContent,
          "heading.basic",
          referenced
        ),
      /使用中の翻訳キーは削除できません: heading.basic/
    );
    const next = removeTranslation(
      siteContent as SiteContent,
      "heading.jobs",
      referenced
    );
    assert.equal("heading.jobs" in next.translations.ja, false);
    assert.equal("heading.jobs" in next.translations.en, false);
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
