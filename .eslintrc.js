module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module"
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
        semi: true,
        trailingComma: "none",
        arrowParens: "avoid"
      }
    ],
    "vuejs-accessibility/no-redundant-roles": 0,
    "vue/no-template-target-blank": [
      "error",
      {
        allowReferrer: true,
        enforceDynamicLinks: "always"
      }
    ]
  }
};
