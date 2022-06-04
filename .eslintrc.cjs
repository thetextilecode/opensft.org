module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier', // this needs to stay last to be able to override other configs
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-anonymous-default-export': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
};
