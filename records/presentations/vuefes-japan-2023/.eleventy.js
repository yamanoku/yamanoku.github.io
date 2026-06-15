import { configureEleventy } from "../_shared/eleventy-base.js";

export default function (eleventyConfig) {
  return configureEleventy(eleventyConfig, { passthroughCopy: ["videos"] });
}
