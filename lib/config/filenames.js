'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        node: true,
        es6: true
    },
    // all plugin rules are re-exported in our `ghost` plugin with the prefix ghost/
    // this allows plugin consumers to install only this plugin rather than this+every-other-plugin
    plugins: [
        'ghost'
    ],
    extends: [
        require.resolve('./base')
    ],
    rules: {
        'ghost/filenames/match-regex': 'off'
    }
};
