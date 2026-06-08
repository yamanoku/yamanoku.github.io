import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import markdownit from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import hljs from "highlight.js";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();
const __dirname = dirname(fileURLToPath(import.meta.url));
const yamaNormalizePath = resolve(
  __dirname,
  "../../packages/yama-normalize/yama-normalize.css",
);
const hljsCssPath = resolve(
  __dirname,
  "../node_modules/highlight.js/styles/a11y-dark.min.css",
);

export function configureEleventy(eleventyConfig, options = {}) {
  eleventyConfig.setLayoutsDirectory("_includes");

  const mdOptions = {
    html: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang }).value;
      }
      return "";
    },
  };
  let markdownLib = markdownit(mdOptions);

  if (options.footnote !== false) {
    markdownLib = markdownLib.use(markdownItFootnote);
  }

  eleventyConfig.addJavaScriptFunction("budoux", (t) => {
    return parser.translateHTMLString(t);
  });

  eleventyConfig.addJavaScriptFunction("rootPath", function () {
    const depth = (this.page.url.match(/\//g) || []).length - 1;
    return depth > 0 ? "../".repeat(depth) : "./";
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
  eleventyConfig.addPassthroughCopy({
    [hljsCssPath]: "hljs-a11y-dark.css",
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
