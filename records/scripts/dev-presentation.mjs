import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { presentations } from "./presentations.mjs";

const presRoot = resolve("presentations");
const eleventyBin = resolve(presRoot, "node_modules", ".bin", "eleventy");
const slidevBin = resolve(presRoot, "node_modules", ".bin", "slidev");

const ELEVENTY_URL = "http://localhost:8080/";
const SLIDEV_URL = "http://localhost:3030/";

const [name, flag] = process.argv.slice(2);
const pres = presentations.find((p) => p.name === name);

if (!pres) {
  console.error(
    name
      ? `Unknown presentation: ${name}`
      : "Usage: pnpm --filter records dev:presentation <name> [--pages|--slide]",
  );
  console.error("Available presentations:");
  for (const p of presentations) {
    console.error(`  ${p.name} (${p.type})`);
  }
  process.exit(1);
}

const presDir = resolve(presRoot, pres.name);

function eleventyJob(cwd) {
  return {
    bin: eleventyBin,
    args: ["--serve"],
    cwd,
    label: "11ty",
    url: ELEVENTY_URL,
  };
}

function slidevJob(cwd) {
  if (!existsSync(resolve(cwd, "slides.md"))) {
    console.error(`slides.md not found in ${cwd}. Create it first.`);
    process.exit(1);
  }
  return {
    bin: slidevBin,
    args: [],
    cwd,
    label: "Slidev",
    url: SLIDEV_URL,
  };
}

const jobs = [];
if (pres.type === "flat") {
  jobs.push(eleventyJob(presDir));
} else if (pres.type === "monorepo") {
  if (flag !== "--slide") {
    jobs.push(eleventyJob(resolve(presDir, "11ty")));
  }
  if (flag !== "--pages") {
    jobs.push(slidevJob(resolve(presDir, "slidev")));
  }
} else {
  jobs.push(slidevJob(resolve(presDir, "slidev")));
}

const children = jobs.map((job) => {
  console.log(`Starting ${job.label} for ${pres.name} (${job.url})...`);
  return spawn(job.bin, job.args, { cwd: job.cwd, stdio: "inherit" });
});

const killAll = () => {
  for (const child of children) {
    if (child.exitCode === null) {
      child.kill("SIGINT");
    }
  }
};
process.on("SIGINT", killAll);
process.on("SIGTERM", killAll);
for (const child of children) {
  child.on("exit", (code) => {
    killAll();
    process.exitCode = code ?? 0;
  });
}
