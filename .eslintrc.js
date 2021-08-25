module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'func-names': 0,

    // will be resolve by TS
    'import/no-unresolved': 0,

    // let ts manage modules
    'import/no-extraneous-dependencies': 0,

    // fix export/import default
    'import/no-named-as-default': 0,

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // fix tsx component
    'import/prefer-default-export': 0,
  },
};
