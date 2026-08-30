#!/usr/bin/env node
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cli } from "gunshi";
import { rootCommand } from "./commands.js";

export async function runCli(args: string[]): Promise<void> {
  const normalizedArgs = args[0] === "--" ? args.slice(1) : args;
  await cli(normalizedArgs, rootCommand, {
    name: "site",
    version: "0.1.0",
    description: "yamanoku.netの更新を安全に行うCLI",
    strict: true,
    subCommands: rootCommand.subCommands
  });
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    await runCli(process.argv.slice(2));
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
