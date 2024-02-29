module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      files: ['**/*.jsx'], // Указываем, что хотим применять правила только к файлам с расширением .jsx
      rules: {
        'react/prop-types': 'error' // Включаем правило react/prop-types для файлов .jsx
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 130, ignoreComments: true, ignorePattern: '^import .*' }],
    'no-console': 'off',
    'prefer-const': 'warn',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }]
  },
  settings: {
    react: { version: 'detect' }
  }
};
