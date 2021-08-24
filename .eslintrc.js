module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-bitwise': ['error', { allow: ['|'] }],
    'import/extensions': ['never' | 'always' | 'ignorePackages'],
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],
    'no-alert': 'off'
  }
}
