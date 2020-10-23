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
        // sort multiple import lines into alphhabetical groups
        'ghost/sort-imports-es6-autofix/sort-imports-es6': ['error', {
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
        }],

        // Ember Rules ---------------------------------------------------------
        // https://github.com/ember-cli/eslint-plugin-ember#-rules

        // Components
        'ghost/ember/no-attrs-in-components': 'error',
        'ghost/ember/no-attrs-snapshot': 'error',
        'ghost/ember/no-classic-components': 'error', // disable for legacy apps
        'ghost/ember/no-component-lifecycle-hooks': 'error', // disable for legacy apps
        'ghost/ember/no-on-calls-in-components': 'error',
        'ghost/ember/require-tagless-components': 'error', // disable for legacy apps

        // Computed Properties
        'ghost/ember/computed-property-getters': 'off',
        'ghost/ember/no-arrow-function-computed-properties': 'error',
        'ghost/ember/no-assignment-of-untracked-properties-used-in-tracking-contexts': 'error',
        'ghost/ember/no-computed-properties-in-native-classes': 'error',
        'ghost/ember/no-deeply-nested-dependent-keys-with-each': 'error',
        'ghost/ember/no-duplicate-dependent-keys': 'error',
        'ghost/ember/no-incorrect-computed-macros': 'error',
        'ghost/ember/no-invalid-dependent-keys': 'error',
        'ghost/ember/no-side-effects': 'error',
        'ghost/ember/no-volatile-computed-properties': 'error',
        'ghost/ember/require-computed-macros': 'error',
        'ghost/ember/require-computed-property-dependencies': 'off',
        'ghost/ember/require-return-from-computed': 'error',
        'ghost/ember/use-brace-expansion': 'error',

        // Controllers
        'ghost/ember/alias-model-in-controller': 'error',
        'ghost/ember/avoid-using-needs-in-controllers': 'error',
        'ghost/ember/no-controllers': 'off',

        // Deprecations
        'ghost/ember/closure-actions': 'error',
        'ghost/ember/new-module-imports': 'error',
        'ghost/ember/no-function-prototype-extensions': 'error',
        'ghost/ember/no-mixins': 'error',
        'ghost/ember/no-new-mixins': 'error',
        'ghost/ember/no-observers': 'error',
        'ghost/ember/no-old-shims': 'error',

        // Ember Data
        'ghost/ember/no-empty-attrs': 'off',
        'ghost/ember/use-ember-data-rfc-395-imports': 'error',

        // Ember Object
        'ghost/ember/avoid-leaking-state-in-ember-objects': 'error',
        'ghost/ember/no-get-with-default': 'error',
        'ghost/ember/no-get': 'off', // we still use proxy objects frequently
        'ghost/ember/no-proxies': 'off', // we still use proxy objects frequently
        'ghost/ember/no-try-invoke': 'error',
        'ghost/ember/require-super-in-init': 'error',
        'ghost/ember/use-ember-get-and-set': 'error',

        // Ember Octane - disable these rules in apps if not using Octane
        'ghost/ember/classic-decorator-hooks': 'error',
        'ghost/ember/classic-decorator-no-classic-methods': 'error',
        'ghost/ember/no-actions-hash': 'error',
        'ghost/ember/no-classic-classes': 'error',
        'ghost/ember/no-ember-super-in-es-classes': 'error',

        // jQuery
        'ghost/ember/jquery-ember-run': 'error',
        'ghost/ember/no-global-jquery': 'error',
        'ghost/ember/no-jquery': 'off', // useful to enable for any apps that don't need IE11 support

        // Miscellaneous
        // named-functions-in-promises is quite heavy-handed, the intent is good but
        // it triggers on too many cases where it's not so useful
        'ghost/ember/named-functions-in-promises': 'off',
        'ghost/ember/no-incorrect-calls-with-inline-anonymous-functions': 'error',
        'ghost/ember/no-invalid-debug-function-arguments': 'error',
        'ghost/ember/no-restricted-service-injections': 'off',

        // Routes
        'ghost/ember/no-capital-letters-in-routes': 'error',
        'ghost/ember/no-controller-access-in-routes': 'error',
        'ghost/ember/no-private-routing-service': 'error',
        'ghost/ember/no-unnecessary-index-route': 'error',
        'ghost/ember/no-unnecessary-route-path-option': 'error',
        'ghost/ember/route-path-style': 'error',
        'ghost/ember/routes-segments-snake-case': 'error',

        // Stylistic Issues
        'ghost/ember/no-unnecessary-service-injection-argument': 'error',
        'ghost/ember/order-in-components': 'error',
        'ghost/ember/order-in-controllers': 'error',
        'ghost/ember/order-in-models': 'off', // odd ordering, maybe re-enable once improved
        'ghost/ember/order-in-routes': 'error',

        // Testing
        'ghost/ember/no-ember-testing-in-module-scope': 'error',
        'ghost/ember/no-invalid-test-waiters': 'error',
        'ghost/ember/no-legacy-test-waiters': 'error',
        'ghost/ember/no-noop-setup-on-error-in-before': 'error',
        'ghost/ember/no-pause-test': 'error',
        'ghost/ember/no-replace-test-comments': 'error',
        'ghost/ember/no-restricted-resolver-tests': 'error',
        'ghost/ember/no-test-and-then': 'error',
        'ghost/ember/no-test-import-export': 'error',
        'ghost/ember/no-test-module-for': 'error',
        'ghost/ember/no-test-support-import': 'error',
        'ghost/ember/no-test-this-render': 'error',
        'ghost/ember/prefer-ember-test-helpers': 'error'
    }
};
