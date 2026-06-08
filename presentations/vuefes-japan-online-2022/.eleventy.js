import markdownit from "markdown-it";
import mila from "markdown-it-link-attributes";
import markdownItFootnote from "markdown-it-footnote";
import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_includes");
  const mdOptions = {
    html: true
  };
  const milaOptions = {
    attrs: {
      target: "_blank",
      rel: "noopener"
    }
  };
  const markdownLib = markdownit(mdOptions).use(mila, milaOptions).use(markdownItFootnote);
  eleventyConfig.addJavaScriptFunction("budoux", t => {
    return parser.translateHTMLString(t);
  });
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "pages",
      output: "docs",
    },
  };
};
