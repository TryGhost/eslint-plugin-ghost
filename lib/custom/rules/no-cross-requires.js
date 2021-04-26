'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {docs: {
        description: 'Enforce separation between Ghost frontend and server',
        category: 'Ghost',
        recommended: false
    },
    schema: [
        {
            type: 'object',
            properties: {
                shared: {
                    type: 'boolean'
                },
                server: {
                    type: 'boolean'
                },
                frontend: {
                    type: 'boolean'
                },
                ignorePattern: {
                    type: 'string'
                }
            },
            additionalProperties: false
        }

    ]},

    create(context) {
        return {
            CallExpression(node) {
                if (node.callee && node.callee.name === 'require') {
                    const config = context.options[0];
                    const requirePath = node.arguments[0].value;

                    const ignorePattern = config.ignorePattern ? new RegExp(config.ignorePattern, 'u') : false;
                    const ignorePath = ignorePattern && ignorePattern.test(requirePath);

                    if (config.server && /core\/server/.test(context.getFilename())) {
                        if (/frontend\//.test(requirePath) && !ignorePath) {
                            return context.report(node, node.loc, `Invalid frontend require in core/server: ${requirePath}`);
                        }
                    }

                    if (config.frontend && /core\/frontend/.test(context.getFilename())) {
                        if (/server\//.test(requirePath) && !ignorePath) {
                            return context.report(node, node.loc, `Invalid server require in core/frontend: ${requirePath}`);
                        }
                    }

                    if (config.shared && /core\/shared/.test(context.getFilename())) {
                        if (/server\//.test(requirePath) && !ignorePath) {
                            return context.report(node, node.loc, `Invalid server require in core/shared: ${requirePath}`);
                        }

                        if (/frontend\//.test(requirePath) && !ignorePath) {
                            return context.report(node, node.loc, `Invalid frontend require in core/shared: ${requirePath}`);
                        }
                    }

                    return null;
                }

                return null;
            }
        };
    }
};
