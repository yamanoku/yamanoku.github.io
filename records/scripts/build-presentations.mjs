import { execSync } from "node:child_process";
import { cpSync } from "node:fs";
import { resolve } from "node:path";
import { presentations } from "./presentations.mjs";

const presRoot = resolve("presentations");
const eleventyBin = resolve(presRoot, "node_modules", ".bin", "eleventy");
const slidevBin = resolve(presRoot, "node_modules", ".bin", "slidev");

for (const pres of presentations) {
  if (pres.wip) continue;

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
