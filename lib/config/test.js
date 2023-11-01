'use strict';

module.exports = {
    env: {
        mocha: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2022
    },
    globals: {
        should: true,
        sinon: true
    },

    // all plugin rules are re-exported in our `ghost` plugin with the prefix ghost/
    // this allows plugin consumers to install only this plugin rather than this+every-other-plugin
    plugins: ['ghost'],

    extends: require.resolve('./base'),

    rules: require('./test-rules')
};
