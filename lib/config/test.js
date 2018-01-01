'use strict';

module.exports = {
    env: {
        mocha: true,
        node: true
    },

    globals: {
        should: true,
        sinon: true
    },

    extends: require.resolve('./base')
};
