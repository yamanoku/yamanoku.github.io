module.exports = {
  semi: true,
  trailingComma: "none",
  arrowParens: "avoid",
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: 'src/**/*.astro',
      options: { parser: 'astro' },
    },
  ]
};
