module.exports = {
  root: true,
  env: { node: true, es2021: true, browser: true },
  parserOptions: { ecmaVersion: 2021, parser: 'babel-eslint' },
  extends: ['plugin:vue/recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'vue', 'nuxt'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': ['warn', { allow: ['debug', 'warn', 'info', 'error'] }],
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 160,
        arrowParens: 'avoid',
      },
    ],
  },
}
