// node-assert-params.js
module.exports = {
    meta: {
        docs: {
            description: 'Enforce strict mode when using node:assert',
            category: 'Ghost',
            recommended: false
        },
        messages: {
            forceStrict: 'Always use strict mode when using node:assert',
            noStrictMethod: 'Unnecessary use of strict methods when using node:assert in strict mode'
        }
    },
    create(context) {
        const assertFns = [
            'deepStrictEqual',
            'strictEqual',
            'notDeepStrictEqual',
            'notStrictEqual'
        ];

        return {
            VariableDeclaration(node) {
                const {declarations} = node;
                for (const declaration of declarations) {
                    const {init} = declaration;
                    if (
                        init &&
                    init.type === 'CallExpression' &&
                    init.callee.name === 'require' &&
                    init.arguments.length === 1 &&
                    init.arguments[0].value === 'assert' &&
                    !node.parent.generator &&
                    !node.parent.async
                    ) {
                    // Report violation of strict mode
                        context.report({
                            node: init.arguments[0],
                            messageId: 'forceStrict'
                        });
                    }
                }
            },

            ImportDeclaration(node) {
                const {source} = node;
                if (
                    source &&
                source.type === 'Literal' &&
                source.value === 'assert' &&
                !node.parent.generator &&
                !node.parent.async
                ) {
                    // Report violation of strict mode
                    context.report({
                        node: source,
                        messageId: 'forceStrict'
                    });
                }
            },

            'CallExpression[callee.object.name=assert]': function (node) {
                if (
                    !(
                        node
                        && node.type === 'CallExpression'
                        && !node.optional
                        && node.callee.type === 'MemberExpression'
                        && !node.callee.optional
                    )
                ) {
                    return;
                }

                // Method names we check
                if (assertFns.includes(node.callee.property.name)) {
                    context.report({node, messageId: 'noStrictMethod'});
                }

                return;
            }
        };
    }
};
