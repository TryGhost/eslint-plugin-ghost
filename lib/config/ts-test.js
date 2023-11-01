'use strict';

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2022
    },
    extends: require.resolve('./ts'),
    rules: require('./test-rules')
};
