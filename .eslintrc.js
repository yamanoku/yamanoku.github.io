module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "plugin:astro/recommended",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    }
  ]
};
