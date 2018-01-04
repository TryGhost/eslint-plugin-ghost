'use strict';

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
        // @TODO: add an ember-specific config
        browser: require('./config/browser'),
        node: require('./config/node'),
        test: require('./config/test')
    }
};
