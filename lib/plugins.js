'use strict';

const ember = require('eslint-plugin-ember');
const mocha = require('eslint-plugin-mocha');
const node = require('eslint-plugin-n');
const unicorn = require('eslint-plugin-unicorn');
const sortImportsES6Autofix = require('eslint-plugin-sort-imports-es6-autofix');
const filenames = require('eslint-plugin-filenames-ts');
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

// Schemas for rules that don't define them (needed for ESLint 9 flat config)
// Note: match-regex options allow null values (e.g., ['error', '^pattern$', null, true])
const ruleSchemas = {
    'filenames/match-regex': [
        {type: 'string'},
        {type: ['boolean', 'null']},
        {type: ['boolean', 'null']}
    ],
    'filenames/no-index': []
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
            let ruleDefinition = rules[rule];

            // Wrap function-style rules to add missing schemas for ESLint 9 compatibility
            if (typeof ruleDefinition === 'function' && ruleSchemas[name]) {
                prefixedRules[name] = {
                    create: ruleDefinition,
                    meta: {
                        schema: ruleSchemas[name]
                    }
                };
            } else {
                prefixedRules[name] = ruleDefinition;
            }
        });
    });

    return prefixedRules;
};

module.exports = {
    getPrefixedPluginRules
};
