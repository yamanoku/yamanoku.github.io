import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadDefaultJapaneseParser } from "budoux";
import hljs from "highlight.js";
import markdownit from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

const parser = loadDefaultJapaneseParser();
const __dirname = dirname(fileURLToPath(import.meta.url));
const yamaNormalizePath = resolve(
  __dirname,
  "../../packages/yama-normalize/yama-normalize.css"
);
const hljsCssPath = resolve(
  __dirname,
  "../node_modules/highlight.js/styles/a11y-dark.min.css"
);

export function configureEleventy(eleventyConfig, options = {}) {
  eleventyConfig.setLayoutsDirectory("_includes");

  const mdOptions = {
    html: true,
    langPrefix: "hljs language-",
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(str, { language: lang }).value;
      }
      return "";
    }
  };
  const markdownLib = markdownit(mdOptions).use(markdownItFootnote);

  eleventyConfig.addJavaScriptFunction("budoux", (t) => {
    return parser.translateHTMLString(t);
  });

  eleventyConfig.addJavaScriptFunction("rootPath", function () {
    const depth = (this.page.url.match(/\//g) || []).length - 1;
    return depth > 0 ? "../".repeat(depth) : "./";
  });

  eleventyConfig.addJavaScriptFunction("baseStyleTags", function () {
    const root = this.rootPath();
    return `
      <link rel="stylesheet" href="${root}yama-normalize.css">
      <link rel="stylesheet" href="${root}hljs-a11y-dark.css">
      <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:var(--y-rhythm-3)}.footnote-item > p{margin:0;}</style>
    `;
  });

  const today = new Date();
  eleventyConfig.addJavaScriptFunction("year", () => {
    return today.getFullYear();
  });

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({
    [yamaNormalizePath]: "yama-normalize.css"
  });
  eleventyConfig.addPassthroughCopy({
    [hljsCssPath]: "hljs-a11y-dark.css"
  });

  if (options.passthroughCopy) {
    for (const copy of options.passthroughCopy) {
      eleventyConfig.addPassthroughCopy(copy);
    }
  }

  return {
    dir: {
      input: "pages",
      output: options.output || "docs"
    }
  };
}
