'use strict';

const ember = require('eslint-plugin-ember');
const mocha = require('eslint-plugin-mocha');
const node = require('eslint-plugin-node');
const unicorn = require('eslint-plugin-unicorn');
const sortImportsES6Autofix = require('eslint-plugin-sort-imports-es6-autofix');
const filenames = require('eslint-plugin-filenames');
const noReturnInLoop = require('@kapouer/eslint-plugin-no-return-in-loop');
const custom = require('./custom');

const plugins = {
    ember,
    mocha,
    node,
    unicorn,
    'sort-imports-es6-autofix': sortImportsES6Autofix,
    filenames: filenames,
    'no-return-in-loop': noReturnInLoop,
    'ghost-custom': custom
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
