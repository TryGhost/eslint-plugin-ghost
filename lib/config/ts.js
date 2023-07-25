'use strict';

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2022
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        // This rule is a bit weird so I'm disabling it for now
        '@typescript-eslint/no-inferrable-types': 'off'
    }
};
