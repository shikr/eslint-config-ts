module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-tabs': 'error',
    'max-classes-per-file': ['error', 2],
    'no-invalid-regexp': 'error',
    'no-this-before-super': 'error',
    'no-extra-boolean-cast': 'error',
    'no-empty': 'warn',
    'prefer-arrow-callback': 'error',
    'no-unused-private-class-members': 'warn',
    'no-unused-labels': 'warn',
    'no-new-wrappers': 'error',
    'no-unneeded-ternary': 'error',
    'prefer-const': 'error',
    'class-methods-use-this': 'warn',
    semi: ['error', 'never'],
    'no-duplicate-imports': 'error',

    /*------- TypeScript Overrides -------*/
    quotes: 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    'no-extra-semi': 'off',
    'no-dupe-class-members': 'off',
    'no-restricted-imports': 'off',
    'require-await': 'off',
    'no-unused-expressions': 'off',

    '@typescript-eslint/quotes': [
      'warn',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-restricted-imports': 'warn',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unused-expressions': 'warn',

    /*---------- TypeScript ----------*/
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableObject: false,
        allowString: false,
        allowNumber: false
      }
    ],
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: false
      }
    ],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/array-type': 'error'
  }
}
