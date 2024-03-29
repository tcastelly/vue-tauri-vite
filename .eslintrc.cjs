module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  parser: 'vue-eslint-parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'func-names': 0,

    // let ts manage modules
    'import/no-extraneous-dependencies': 0,

    // will be resolved by TS
    'import/no-unresolved': 0,

    // fix export/import default
    'import/no-named-as-default': 0,

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': ['error'],

    // fix tsx component
    'import/prefer-default-export': 0,
  },
};
