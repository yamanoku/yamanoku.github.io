import css from "@eslint/css";

export default [
  {
    files: ["**/*.css"],
    language: "css/css",
    ...css.configs.recommended,
    rules: {
      "css/use-baseline": [
        "error",
        {
          available: "newly",
        },
      ],
    },
  },
];
