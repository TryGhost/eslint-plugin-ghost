module.exports = {
    rules: {
        'max-api-lines': require('./rules/max-api-lines'),
        'max-api-complexity': require('./rules/max-api-complexity'),
        'no-native-error': require('./rules/no-native-error')
    }
};
