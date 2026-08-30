import assert from "node:assert/strict";
import { it } from "node:test";
import { deriveListStage } from "../../../src/presentations/listPresentation.js";

it("derives five linked past stages and skips future or unlinked records", () => {
  const records = [
    {
      date: "2030-01-01",
      event: "Future",
      resources: [{ title: "Future slides", url: "https://example.com/future" }]
    },
    {
      date: "2025-06-01",
      event: "No slides",
      resources: []
    },
    ...Array.from({ length: 6 }, (_, index) => ({
      date: `2025-05-0${6 - index}`,
      event: `Event ${index}`,
      resources: [
        {
          title: `Slides ${index}`,
          url: `https://example.com/${index}`
        }
      ]
    }))
  ];

  const stages = deriveListStage(records, new Date("2026-01-01T00:00:00Z"));
  assert.equal(stages.length, 5);
  assert.equal(stages[0].title, "Slides 0");
  assert.equal(
    stages.some((stage) => stage.title === "Future slides"),
    false
  );
});
