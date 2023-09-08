'use strict';

module.exports = {
    root: true,

    env: {
        es6: true
    },

    extends: 'eslint:recommended',

    rules: require('./shared-rules')
};
