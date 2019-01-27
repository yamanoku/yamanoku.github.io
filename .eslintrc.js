module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue-a11y/base'
  ],
  plugins: [
    'vue',
    'vue-a11y'
  ],
  rules: {}
}
