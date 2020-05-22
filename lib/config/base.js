'use strict';

module.exports = {
    root: true,

    env: {
        es6: true
    },

    extends: 'eslint:recommended',

    rules: {
        // Style Rules
        // Require 4 spaces
        indent: ['error', 4],
        // Require single quotes for strings & properties (allows template literals)
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        'quote-props': ['error', 'as-needed'],
        // Require semi colons, always at the end of a line
        semi: ['error', 'always'],
        'semi-style': ['error', 'last'],
        // Don't allow dangling commas
        'comma-dangle': ['error', 'never'],
        // Always require curly braces, and position them at the end and beginning of lines
        curly: 'error',
        'brace-style': ['error', '1tbs'],
        // Don't allow padding inside of blocks
        'padded-blocks': ['error', 'never'],
        // Require objects to be consistently formatted with newlines
        'object-curly-newline': ['error', {consistent: true}],
        // Don't allow more than 1 consecutive empty line or an empty 1st line
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 0}],
        // Variables must be camelcase, but properties are not checked
        camelcase: ['error', {properties: 'never'}],
        // Allow newlines before dots, not after e.g. .then goes on a new line
        'dot-location': ['error', 'property'],
        // Prefer dot notation over array notation
        'dot-notation': ['error'],

        // Spacing rules
        // Don't allow multiple spaces anywhere
        'no-multi-spaces': 'error',
        // Anonymous functions have a sape, named functions never do
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        // Don't put spaces inside of objects or arrays
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        // Allow a max of one space between colons and values
        'key-spacing': ['error', {mode: 'strict'}],
        // Require spaces before and after keywords like if, else, try, catch etc
        'keyword-spacing': 'error',
        // No spaces around semis
        'semi-spacing': 'error',
        // 1 space around arrows
        'arrow-spacing': 'error',
        // Don't allow spaces inside parenthesis
        'space-in-parens': ['error', 'never'],
        // Require single spaces either side of operators
        'space-unary-ops': 'error',
        'space-infix-ops': 'error',

        // Best practice rules
        // Require === / !==
        eqeqeq: ['error', 'always'],
        // Don't allow ++ and --
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        // Don't allow eval
        'no-eval': 'error',
        // Throw errors for unnecessary usage of .call or .apply
        'no-useless-call': 'error',
        // Don't allow console.* calls
        'no-console': 'error',
        // Prevent [variable shadowing](https://en.wikipedia.org/wiki/Variable_shadowing)
        'no-shadow': ['warn'],

        // Do not enforce single lines when using arrow functions.
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
        'implicit-arrow-linebreak': 'error',
        'no-confusing-arrow': 'error'
    }
};
