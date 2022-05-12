'use strict';

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    extends: [
        require.resolve('./base')
    ],

    // @TODO: promote all of these to error during cleanup
    rules: {
        'no-var': 'warn',
        'one-var': ['warn', 'never'],
        'no-restricted-syntax': ['error',
            {
                selector: 'NewExpression[callee.name=\'Error\']',
                message: 'Direct calls to new Error() are not allowed. Please use @tryghost/errors.'
            },
            {
                selector: 'CallExpression[callee.name=tpl][arguments.0.type=Literal]',
                message: 'Calls to tpl should not use literal strings. Please define all strings in a messages object.'
            },
            {
                selector: 'NewExpression[callee.object.name=errors][arguments.length > 0][arguments.0.type!=ObjectExpression]',
                message: 'GhostErrors must be initialised with an object'
            },
            {
                selector: 'NewExpression[callee.name=/^[A-Z][a-zA-Z]+Error$/][arguments.length > 0][arguments.0.type!=ObjectExpression]',
                message: 'GhostErrors must be initialised with an object - ignore if error not from @tryghost/errors'
            }
        ],
        'ghost/node/no-restricted-require': ['warn', [
            {
                name: 'ghost-ignition',
                message: '@deprecated, please use @tryghost/errors, @tryghost/logging or @tryghost/debug. Config and Server are coming soon!'
            }
        ]]
    },
    overrides: [
        {
            files: '**/index.js',
            rules: {
                'max-lines': ['error', {skipBlankLines: true, skipComments: true, max: 50}]
            }
        }
    ]
};
