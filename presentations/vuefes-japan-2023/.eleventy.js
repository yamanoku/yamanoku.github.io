import { configureEleventy } from "../shared/eleventy-base.js";

export default function (eleventyConfig) {
  return configureEleventy(eleventyConfig, { passthroughCopy: ["videos"] });
};
