module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'prefer-destructuring': ['error', { object: false, array: false }], // destructuring a single property (seems like a common case) feels hard to read
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreComments: true, // comments: 80
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': 'off', // Because container logging goes to stdout.
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      // We lint unit tests differently.
      files: ['*.spec.ts'],
      rules: {
        // Can't fathom how to resolve imprts in tests so heigh-ho, whatever, mystery
        'import/no-unresolved': 'off',

        // Avoid mocha/chai "Expected an assignment or function call and instead saw an expression"
        'no-unused-expressions': 'off',

        // Avoid "* should be listed in the project's dependencies, not devDependencies"
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  ignorePatterns: ['node_modules', 'dist'],
};
