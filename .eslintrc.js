const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  parserOptions: {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'arrowFunctions': true,
      'classes': false,
      'destructuring': false,
      'experimentalObjectRestSpread': true,
      'forOf': false,
      'jsx': true,
      'modules': true,
      'restParams': true,
      'spread': true,
      'templateStrings': true,
    },
    sourceType: 'module',
  },

  env: {
    'browser': true,
    'es6': true,
    'mocha': true,
    'node': true,
  },

  globals: {
    '__DEV__': true,
  },

  plugins: [
    'react',
  ],

  rules: {
    // general rules
    'accessor-pairs': OFF,
    'array-bracket-spacing': [ERROR, 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': [ERROR, { 'before': true, 'after': true }],
    'brace-style': [ERROR, '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': [ERROR, { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [ERROR, 'never'],
    'consistent-return': OFF,
    'curly': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': ERROR,
    'eol-last': ERROR,
    'eqeqeq': [ERROR, 'allow-null'],
    'indent': [ERROR, 2, { 'SwitchCase': 1 }],
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [ERROR, { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
    'keyword-spacing': ERROR,
    'no-bitwise': OFF,
    'no-cond-assign': ERROR,
    'no-console': [ERROR, { 'allow': ['warn', 'error']}],
    'no-constant-condition': ERROR,
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-duplicate-case': ERROR,
    'no-empty-character-class': ERROR,
    'no-empty': ERROR,
    'no-ex-assign': ERROR,
    'no-extra-boolean-cast': ERROR,
    'no-extra-semi': ERROR,
    'no-func-assign': ERROR,
    'no-inner-declarations': ERROR,
    'no-invalid-regexp': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-plusplus': ERROR,
    'no-prototype-builtins': ERROR,
    'no-redeclare': ERROR,
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-shadow': ERROR,
    'no-sparse-arrays': ERROR,
    'no-throw-literal': ERROR,
    'no-undef': ERROR,
    'no-unexpected-multiline': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-unreachable': ERROR,
    'no-unused-expressions': ERROR,
    'no-unused-vars': [ERROR, { 'args': 'none' }],
    'no-var': ERROR,
    'object-curly-spacing': [ERROR, 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
    'one-var': [ERROR, 'never'],
    'operator-linebreak': [ERROR, 'after', { 'overrides': { '?': 'ignore', ':': 'ignore' }}],
    'prefer-const': ERROR,
    'quotes': [ERROR, 'single', 'avoid-escape'],
    'semi': [ERROR, 'always'],
    'space-before-blocks': [ERROR, 'always'],
    'space-before-function-paren': [ERROR, { 'anonymous': 'never', 'named': 'never' }],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,
    'spaced-comment': [ERROR, 'always'],
    'valid-typeof': ERROR,
    // TODO 'max-len': [ERROR, 88, 2, {'ignoreUrls': true, 'ignoreTrailingComments': true}],

    // JSX
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-closing-bracket-location': [ERROR, { 'selfClosing': 'after-props', 'nonEmpty': 'after-props' }],
    'react/jsx-curly-spacing': [ERROR, 'never', { 'allowMultiline': false }],
    'react/jsx-equals-spacing': [ERROR, 'never'],
    'react/jsx-indent': [ERROR, 2],
    'react/jsx-key': ERROR,
    'react/jsx-no-bind': [ERROR, { 'allowArrowFunctions': true, 'allowBind': true }],
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-space-before-closing': [ERROR, 'always'],
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,

    // React
    'react/display-name': ERROR,
    'react/no-comment-textnodes': ERROR,
    'react/no-deprecated': [WARNING, { 'react': '0.15' }],
    'react/no-did-mount-set-state': ERROR,
    'react/no-did-update-set-state': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-set-state': ERROR,
    'react/no-string-refs': ERROR,
    'react/no-unknown-property': ERROR,
    'react/prefer-es6-class': OFF,
    'react/prefer-stateless-function': ERROR,
    'react/react-in-jsx-scope': ERROR,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': OFF,
    'react/sort-prop-types': ERROR,
    'react/wrap-multilines': [ERROR, { 'declaration': true, 'assignment': false }],
  },
};