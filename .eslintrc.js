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
    'plugin:vue-a11y/base',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'vue',
    'vue-a11y'
  ],
  rules: {
    'prettier/prettier': ['error', { 'semi': false }]
  }
}
