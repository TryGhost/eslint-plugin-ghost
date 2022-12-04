const {RuleTester} = require('eslint');
const ghostTplUsage = require('../lib/custom/rules/ghost-tpl-usage');
const ruleTester = new RuleTester();

ruleTester.run('ghost-tpl-usage', ghostTplUsage, {
    valid: [
        {
            code:
            `
                const messages = {test: 'hello world'};
                tpl(messages.test)
            `,
            parserOptions: {
                ecmaVersion: 6
            }
        }
    ],
    invalid: [
        {
            code: `tpl('some message here')`,
            // we can use messageId from the rule object
            errors: [{messageId: 'requireVariable'}]
        }
    ]
});
