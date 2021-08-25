module.exports = {
  '*.vue': [
    'vue-cli-service lint',
  ],
  '*.{js,jsx}': [
    'eslint --cache --fix',
  ],
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache --fix',
  ],
};
