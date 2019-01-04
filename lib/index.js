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
        ember: require('./config/ember'),
        node: require('./config/node'),
        es: require('./config/es'),
        test: require('./config/test')
    },

    // this re-exports all of the plugin rules with a prefix, this is the only
    // way shared configs can make use of plugins without the consumer app
    // needing to separately install each plugin alongside this one.
    // See https://github.com/eslint/eslint/issues/3458
    rules: getPrefixedPluginRules()
};
