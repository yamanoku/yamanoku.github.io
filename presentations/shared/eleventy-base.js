import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import markdownit from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();
const __dirname = dirname(fileURLToPath(import.meta.url));
const yamaNormalizePath = resolve(
  __dirname,
  "../../packages/yama-normalize/yama-normalize.css",
);

export function configureEleventy(eleventyConfig, options = {}) {
  eleventyConfig.setLayoutsDirectory("_includes");

  const mdOptions = { html: true };
  let markdownLib = markdownit(mdOptions);

  if (options.footnote !== false) {
    markdownLib = markdownLib.use(markdownItFootnote);
  }

  eleventyConfig.addJavaScriptFunction("budoux", (t) => {
    return parser.translateHTMLString(t);
  });

  const today = new Date();
  eleventyConfig.addJavaScriptFunction("year", () => {
    return today.getFullYear();
  });

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({
    [yamaNormalizePath]: "yama-normalize.css",
  });

  if (options.passthroughCopy) {
    for (const copy of options.passthroughCopy) {
      eleventyConfig.addPassthroughCopy(copy);
    }
  }

  return {
    dir: {
      input: "pages",
      output: options.output || "docs",
    },
  };
}
