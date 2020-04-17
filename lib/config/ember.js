'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    // all plugin rules are re-exported in our `ghost` plugin with the prefix ghost/
    // this allows plugin consumers to install only this plugin rather than this+every-other-plugin
    plugins: [
        'ghost'
    ],
    extends: [
        require.resolve('./base')
    ],
    rules: {
        // these are all documented here https://github.com/ember-cli/eslint-plugin-ember#-rules
        'ghost/ember/alias-model-in-controller': 'error',
        'ghost/ember/avoid-leaking-state-in-ember-objects': 'error',
        'ghost/ember/avoid-using-needs-in-controllers': 'error',
        'ghost/ember/classic-decorator-hooks': 'off', // enable for octane
        'ghost/ember/classic-decorator-no-classic-methods': 'off', // enable for octane
        'ghost/ember/closure-actions': 'error',
        'ghost/ember/computed-property-getters': 'off',
        'ghost/ember/jquery-ember-run': 'error',
        // named-functions-in-promises is quite heavy-handed, the intent is good but
        // it triggers on too many cases where it's not so useful
        'ghost/ember/named-functions-in-promises': 'off',
        'ghost/ember/new-module-imports': 'error',
        'ghost/ember/no-actions-hash': 'off', // enable for octane
        'ghost/ember/no-arrow-function-computed-properties': 'error',
        'ghost/ember/no-attrs-in-components': 'error',
        'ghost/ember/no-attrs-snapshot': 'error',
        'ghost/ember/no-capital-letters-in-routes': 'error',
        'ghost/ember/no-classic-classes': 'off', // enable for octane
        'ghost/ember/no-classic-components': 'off', // enable for octane
        'ghost/ember/no-computed-properties-in-native-classes': 'off', // enable for octane
        'ghost/ember/no-deeply-nested-dependent-keys-with-each': 'error',
        'ghost/ember/no-duplicate-dependent-keys': 'error',
        'ghost/ember/no-ember-super-in-es-classes': 'error',
        'ghost/ember/no-ember-testing-in-module-scope': 'error',
        'ghost/ember/no-empty-attrs': 'off',
        'ghost/ember/no-function-prototype-extensions': 'error',
        'ghost/ember/no-get-with-default': 'error',
        'ghost/ember/no-get': 'off', // we still use proxy objects frequently
        'ghost/ember/no-global-jquery': 'error',
        'ghost/ember/no-incorrect-calls-with-inline-anonymous-functions': 'error',
        'ghost/ember/no-invalid-debug-function-arguments': 'error',
        'ghost/ember/no-jquery': 'off', // useful to enable for any apps that don't need IE11 support
        'ghost/ember/no-new-mixins': 'error',
        'ghost/ember/no-observers': 'error',
        'ghost/ember/no-old-shims': 'error',
        'ghost/ember/no-on-calls-in-components': 'error',
        'ghost/ember/no-pause-test': 'error',
        'ghost/ember/no-proxies': 'off',
        'ghost/ember/no-restricted-resolver-tests': 'error',
        'ghost/ember/no-side-effects': 'error',
        'ghost/ember/no-test-and-then': 'error',
        'ghost/ember/no-test-import-export': 'off',
        'ghost/ember/no-test-module-for': 'error',
        'ghost/ember/no-unnecessary-index-route': 'error',
        'ghost/ember/no-unnecessary-route-path-option': 'error',
        'ghost/ember/no-unnecessary-service-injection-argument': 'error',
        'ghost/ember/no-volatile-computed-properties': 'error',
        'ghost/ember/order-in-components': 'error',
        'ghost/ember/order-in-controllers': 'error',
        'ghost/ember/order-in-models': 'off', // odd ordering, maybe re-enable once improved
        'ghost/ember/order-in-routes': 'error',
        'ghost/ember/require-computed-macros': 'error',
        'ghost/ember/require-computed-property-dependencies': 'off',
        'ghost/ember/require-return-from-computed': 'error',
        'ghost/ember/require-super-in-init': 'error',
        'ghost/ember/require-tagless-components': 'off', // enable for octane
        'ghost/ember/route-path-style': 'error',
        'ghost/ember/routes-segments-snake-case': 'error',
        'ghost/ember/use-brace-expansion': 'error',
        'ghost/ember/use-ember-data-rfc-395-imports': 'error',
        'ghost/ember/use-ember-get-and-set': 'error',

        // sort multiple import lines into alphhabetical groups
        'ghost/sort-imports-es6-autofix/sort-imports-es6': ['error', {
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
        }]
    }
};
