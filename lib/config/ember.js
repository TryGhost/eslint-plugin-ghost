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
        // recreate plugin:ember/recommended rules with the ghost prefix
        'ghost/ember/alias-model-in-controller': 'off',
        'ghost/ember/avoid-leaking-state-in-components': 'off',
        'ghost/ember/avoid-leaking-state-in-ember-objects': 'error',
        'ghost/ember/closure-actions': 'error',
        'ghost/ember/jquery-ember-run': 'error',
        'ghost/ember/local-modules': 'off',
        'ghost/ember/named-functions-in-promises': 'off',
        'ghost/ember/new-module-imports': 'error',
        'ghost/ember/no-attrs-in-components': 'error',
        'ghost/ember/no-attrs-snapshot': 'error',
        'ghost/ember/no-capital-letters-in-routes': 'error',
        'ghost/ember/no-duplicate-dependent-keys': 'error',
        'ghost/ember/no-empty-attrs': 'off',
        'ghost/ember/no-function-prototype-extensions': 'error',
        'ghost/ember/no-global-jquery': 'error',
        'ghost/ember/no-jquery': 'off',
        'ghost/ember/no-observers': 'off',
        'ghost/ember/no-old-shims': 'error',
        'ghost/ember/no-on-calls-in-components': 'error',
        'ghost/ember/no-side-effects': 'error',
        'ghost/ember/order-in-components': 'off',
        'ghost/ember/order-in-controllers': 'off',
        'ghost/ember/order-in-models': 'off',
        'ghost/ember/order-in-routes': 'off',
        'ghost/ember/require-super-in-init': 'error',
        'ghost/ember/routes-segments-snake-case': 'error',
        'ghost/ember/use-brace-expansion': 'error',
        'ghost/ember/use-ember-get-and-set': 'off',

        'ghost/sort-imports-es6-autofix/sort-imports-es6': ['error', {
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
        }]
    }
};
