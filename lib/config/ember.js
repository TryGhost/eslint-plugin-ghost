'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
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
        'ghost/ember/avoid-leaking-state-in-components': 'off', // deprecated
        'ghost/ember/avoid-leaking-state-in-ember-objects': 'error',
        'ghost/ember/avoid-using-needs-in-controllers': 'error',
        'ghost/ember/classic-decorator-hooks': 'off', // TODO: enable, broken in 6.7.0
        'ghost/ember/classic-decorator-no-classic-methods': 'off', // TODO: enable, broken in 6.7.0
        'ghost/ember/closure-actions': 'error',
        'ghost/ember/computed-property-getters': 'off',
        'ghost/ember/jquery-ember-run': 'error',
        'ghost/ember/local-modules': 'off', // deprecated
        // named-functions-in-promises is quite heavy-handed, the intent is good but
        // it triggers on too many cases where it's not so useful
        'ghost/ember/named-functions-in-promises': 'off',
        'ghost/ember/new-module-imports': 'error',
        'ghost/ember/no-attrs-in-components': 'error',
        'ghost/ember/no-attrs-snapshot': 'error',
        'ghost/ember/no-capital-letters-in-routes': 'error',
        'ghost/ember/no-deeply-nested-dependent-keys-with-each': 'error',
        'ghost/ember/no-duplicate-dependent-keys': 'error',
        'ghost/ember/no-ember-super-in-es-classes': 'error',
        'ghost/ember/no-ember-testing-in-module-scope': 'error',
        'ghost/ember/no-empty-attrs': 'error',
        'ghost/ember/no-function-prototype-extensions': 'error',
        'ghost/ember/no-get': 'off', // we still use proxy objects frequently
        'ghost/ember/no-global-jquery': 'error',
        'ghost/ember/no-invalid-debug-function-arguments': 'error',
        'ghost/ember/no-jquery': 'off', // useful to enable for any apps that don't need IE11 support
        'ghost/ember/no-new-mixins': 'off',
        'ghost/ember/no-observers': 'error',
        'ghost/ember/no-old-shims': 'error',
        'ghost/ember/no-on-calls-in-components': 'error',
        'ghost/ember/no-restricted-resolver-tests': 'off',
        'ghost/ember/no-side-effects': 'error',
        'ghost/ember/no-test-and-then': 'error',
        'ghost/ember/no-test-import-export': 'off',
        'ghost/ember/no-unnecessary-index-route': 'error',
        'ghost/ember/no-unnecessary-route-path-option': 'error',
        'ghost/ember/no-unnecessary-service-injection-argument': 'error',
        'ghost/ember/no-volatile-computed-properties': 'error',
        'ghost/ember/order-in-components': 'error',
        'ghost/ember/order-in-controllers': 'error',
        'ghost/ember/order-in-models': 'off', // odd ordering, maybe re-enable once improved
        'ghost/ember/order-in-routes': 'error',
        'ghost/ember/route-path-style': 'error',
        'ghost/ember/require-computed-macros': 'error',
        'ghost/ember/require-return-from-computed': 'error',
        'ghost/ember/require-super-in-init': 'error',
        'ghost/ember/routes-segments-snake-case': 'error',
        'ghost/ember/use-brace-expansion': 'error',
        'ghost/ember/use-ember-get-and-set': 'error',

        // sort multiple import lines into alphhabetical groups
        'ghost/sort-imports-es6-autofix/sort-imports-es6': ['error', {
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
        }]
    }
};
