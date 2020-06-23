module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'warn',
      'windows',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      { requireForBlockBody: true },
    ],
    'require-jsdoc': 'off',
  },
};
