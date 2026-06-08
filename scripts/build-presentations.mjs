import { execSync } from "node:child_process";
import { cpSync } from "node:fs";
import { resolve } from "node:path";

const presRoot = resolve("presentations");
const eleventyBin = resolve(presRoot, "node_modules", ".bin", "eleventy");
const slidevBin = resolve(presRoot, "node_modules", ".bin", "slidev");

const presentations = [
  { name: "tskaigi-2026", type: "monorepo" },
  { name: "burikaigi-2026", type: "monorepo" },
  { name: "vuefes-japan-2025", type: "monorepo" },
  { name: "tskaigi-2025", type: "flat" },
  { name: "frontendo-2024", type: "flat" },
  { name: "vuefes-japan-2023", type: "flat" },
  { name: "vuefes-japan-online-2022", type: "flat" },
  { name: "jsconfjp-2021", type: "flat" },
  { name: "vue-a11y-2019", type: "flat" },
];

for (const pres of presentations) {
  const presDir = resolve(presRoot, pres.name);
  const outputDir = resolve("dist", pres.name);

  console.log(`Building ${pres.name}...`);

  if (pres.type === "monorepo") {
    execSync(eleventyBin, {
      cwd: resolve(presDir, "11ty"),
      stdio: "inherit",
    });
    execSync(
      `${slidevBin} build --base /${pres.name}/slide/ --out ../docs/slide/`,
      { cwd: resolve(presDir, "slidev"), stdio: "inherit" },
    );
  } else {
    execSync(eleventyBin, { cwd: presDir, stdio: "inherit" });
  }

  cpSync(resolve(presDir, "docs"), outputDir, { recursive: true });
  console.log(`Done: ${pres.name}`);
}
