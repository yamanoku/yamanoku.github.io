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
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
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
