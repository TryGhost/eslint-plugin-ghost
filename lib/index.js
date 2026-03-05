'use strict';

const getPrefixedPluginRules = require('./plugins').getPrefixedPluginRules;

/**
 * Ghost's ESLint rules should:
 * 1. enforce indent, spacing & structure consistency for readability
 * 2. require syntax where it reduces potential errors & mistakes
 * 3. not be overbearing and reduce productivity
 *
 * That means:
 *  - style rules can be disabled for testing
 *  - these rules can be much less strict than our old rules
 *  - consistent indent, spacing & structure are still important
 *  - arrow syntax is a good example - strict spacing & structure, relaxed parens & braces
 */

module.exports = {
    configs: {
        browser: require('./config/browser'),
        'browser-no-style': require('./config/browser-no-style'),
        ember: require('./config/ember'),
        'ember-no-style': require('./config/ember-no-style'),
        node: require('./config/node'),
        'node-no-style': require('./config/node-no-style'),
        es: require('./config/es'),
        'es-no-style': require('./config/es-no-style'),
        ts: require('./config/ts'),
        'ts-no-style': require('./config/ts-no-style'),
        filenames: require('./config/filenames'),
        'filenames-no-style': require('./config/filenames-no-style'),
        test: require('./config/test'),
        'test-no-style': require('./config/test-no-style'),
        'ts-test': require('./config/ts-test'),
        'ts-test-no-style': require('./config/ts-test-no-style')
    },

    // this re-exports all of the plugin rules with a prefix, this is the only
    // way shared configs can make use of plugins without the consumer app
    // needing to separately install each plugin alongside this one.
    // See https://github.com/eslint/eslint/issues/3458
    rules: getPrefixedPluginRules()
};
