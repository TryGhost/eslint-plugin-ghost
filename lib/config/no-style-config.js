'use strict';

const noStyleRules = require('./no-style-rules');

module.exports = function noStyleConfig(configName) {
    return {
        extends: require.resolve(`./${configName}`),
        rules: noStyleRules
    };
};
