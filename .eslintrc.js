module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
