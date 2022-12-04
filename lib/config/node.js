'use strict';

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2022
    },
    extends: [
        require.resolve('./base')
    ],

    rules: {
        // @TODO: promote all of these to error during cleanup
        'no-var': 'warn',
        'one-var': ['warn', 'never'],
        'ghost/node/no-restricted-require': ['warn', [
            {
                name: 'ghost-ignition',
                message: '@deprecated, please use @tryghost/errors, @tryghost/logging or @tryghost/debug. Config and Server are coming soon!'
            }
        ]],
        'ghost/ghost-custom/no-native-error': ['error'],
        'ghost/ghost-custom/ghost-error-usage': ['error'],
        'ghost/ghost-custom/ghost-tpl-usage': ['error']
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
