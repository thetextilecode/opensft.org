module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier', // this needs to stay last to be able to override other configs
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
};
