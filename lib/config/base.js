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
        // Require single quotes fir strings, but also allow template literals
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
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
        'object-curly-newline': ['error', {'consistent': true}],
        // Don't allow more than 1 empty line in a file
        'no-multiple-empty-lines': ['error', {'max': 1}],
        // Variables must be camelcase, but properties are not checked
        'camelcase': ['error', {'properties': 'never'}],

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

        // Best practice rules
        // Require === / !==
        eqeqeq: ['error', 'always'],
        // Don't allow eval
        'no-eval': 'error',
        // Throw errors for unnecessary usage of .call or .apply
        'no-useless-call': 'error',

        // Arrow functions
        // Have parens for multiple args and start on the same line
        // .do((something, else) => {
        //    ...many lines...
        //  });
        // Unless it's a very simple one-line rule
        // .catch(err => reject(err))
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'implicit-arrow-linebreak': 'error',
        'no-confusing-arrow': 'error'
    }
};
