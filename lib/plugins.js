'use strict';

const ember = require('eslint-plugin-ember');
const mocha = require('eslint-plugin-mocha');
const sortImportsES6Autofix = require('eslint-plugin-sort-imports-es6-autofix');

const plugins = {
    ember,
    mocha,
    'sort-imports-es6-autofix': sortImportsES6Autofix
};

/**
 * Create a rules object from plugin rules.
 * Each rule is prefixed by the name of the plugin it comes from
 */
const getPrefixedPluginRules = () => {
    let prefixedRules = {};

    Object.keys(plugins).forEach((plugin) => {
        let rules = plugins[plugin].rules;

        Object.keys(rules).forEach((rule) => {
            let name = `${plugin}/${rule}`;
            prefixedRules[name] = rules[rule];
        });
    });

    return prefixedRules;
};

module.exports = {
    getPrefixedPluginRules
};
