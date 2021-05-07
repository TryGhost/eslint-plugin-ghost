module.exports = {
    rules: {
        'no-cross-requires': require('./rules/no-cross-requires'),
        'max-api-lines': require('./rules/max-api-lines'),
        'max-api-complexity': require('./rules/max-api-complexity')
    }
};
