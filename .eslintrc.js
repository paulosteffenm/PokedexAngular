module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'windows'],
    'require-jsdoc': 'off',
    'max-len': ['error', { 'code': 140 }],
    'new-cap': 'off',
    'linebreak-style': ['error', 'unix'],
  },
};
