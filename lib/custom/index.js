module.exports = {
    rules: {
        'max-api-lines': require('./rules/max-api-lines'),
        'max-api-complexity': require('./rules/max-api-complexity'),
        'no-native-error': require('./rules/no-native-error'),
        'ghost-error-usage': require('./rules/ghost-error-usage'),
        'ghost-tpl-usage': require('./rules/ghost-tpl-usage'),
        'no-limit-all': require('./rules/no-limit-all')
    }
};
