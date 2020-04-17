'use strict';

module.exports = {
    env: {
        mocha: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    globals: {
        should: true,
        sinon: true
    },

    // all plugin rules are re-exported in our `ghost` plugin with the prefix ghost/
    // this allows plugin consumers to install only this plugin rather than this+every-other-plugin
    plugins: ['ghost'],

    extends: require.resolve('./base'),

    rules: {
        // https://github.com/lo1tuma/eslint-plugin-mocha/tree/master/docs/rules
        'ghost/mocha/no-exclusive-tests': 'error',
        'ghost/mocha/no-pending-tests': 'warn',
        'ghost/mocha/no-skipped-tests': 'off',
        'ghost/mocha/handle-done-callback': 'error',
        'ghost/mocha/no-synchronous-tests': 'off',
        'ghost/mocha/no-global-tests': 'error',
        'ghost/mocha/no-return-and-callback': 'error',
        'ghost/mocha/no-return-from-async': 'warn',
        'ghost/mocha/valid-test-description': 'off',
        'ghost/mocha/valid-suite-description': 'off',
        'ghost/mocha/no-mocha-arrows': 'error',
        'ghost/mocha/no-hooks': 'off',
        'ghost/mocha/no-hooks-for-single-case': 'off',
        'ghost/mocha/no-sibling-hooks': 'error',
        'ghost/mocha/no-top-level-hooks': 'warn',
        'ghost/mocha/no-identical-title': 'error',
        'ghost/mocha/max-top-level-suites': ['error', {limit: 1}],
        'ghost/mocha/no-nested-tests': 'error',
        'ghost/mocha/no-setup-in-describe': 'error',
        'ghost/mocha/prefer-arrow-callback': 'off',
        'ghost/mocha/no-async-describe': 'error'
    }
};
