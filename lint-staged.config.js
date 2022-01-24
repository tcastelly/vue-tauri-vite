module.exports = {
  '*.{js,jsx,vue}': [
    'eslint --cache --ext .jsx,.js,.vue',
  ],
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache',
  ],
};
