module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vuejs-accessibility/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["vue", "vuejs-accessibility"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        trailingComma: "none",
        arrowParens: "avoid"
      }
    ],
    "vuejs-accessibility/no-redundant-roles": 0
  }
}
