module.exports = {
    meta: {
        docs: {
            description: 'Enforce performant use of Ghost API',
            category: 'Ghost',
            recommended: true
        },
        messages: {
            noLimitAll: '"limit=all" in API requests can cause performance issues. Are you sure you need this?'
        }
    },
    create(context) {
        return {
            Property(node) {
                if (
                    node.key?.name === 'limit' &&
                    node.value?.type === 'Literal' &&
                    node.value?.value === 'all'
                ) {
                    context.report({
                        node: node,
                        messageId: 'noLimitAll'
                    });
                }
            }
        };
    }
};