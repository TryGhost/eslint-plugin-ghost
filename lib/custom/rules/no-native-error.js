// no-empty-catch.js
module.exports = {
    meta: {
        docs: {
            description: 'Enforce use of @tryghost/errors',
            category: 'Ghost',
            recommended: false
        },
        messages: {
            nativeError: 'Direct calls to new Error() are not allowed. Please use @tryghost/errors.'
        }

    },
    create(context) {
        // 'NewExpression[callee.name=\'Error\']'

        return {
            'NewExpression[callee.name=\'Error\']': function (node) {
                context.report({node, messageId: 'nativeError'});
            }
        };
    }
};