import markdownit from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import { loadDefaultJapaneseParser } from "budoux";
const parser = loadDefaultJapaneseParser();

export default function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_includes");
  const mdOptions = {
    html: true
  };
  const markdownLib = markdownit(mdOptions).use(markdownItFootnote);
  eleventyConfig.addJavaScriptFunction("budoux", t => {
    return parser.translateHTMLString(t);
  });
  const today = new Date();
  eleventyConfig.addJavaScriptFunction("year", () => {
    return today.getFullYear();
  })
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: "pages",
      output: "../docs",
    },
  };
};
