module.exports = {
    root: true,

    env: {
        es6: true,
    },

    extends: 'eslint:recommended',

    rules: {
        // Require 4 spaces
        indent: ['error', 4],
        // Require single quotes fir strings, but also allow template literals
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        // Require semi colons
        semi: ['error', 'always']                                             ,
        // Don't allow dangling commas
        'comma-dangle': ['error', 'never'],
        // Always require curly braces
        curly: ['error']
    }
};
