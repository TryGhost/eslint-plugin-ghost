const {RuleTester} = require('eslint');
const ghostErrorUsage = require('../lib/custom/rules/ghost-error-usage');
const ruleTester = new RuleTester();

ruleTester.run('ghost-error-usage', ghostErrorUsage, {
    valid: [
        {
            code: `new errors.IntenralServerError({message: 'hello world'})`
        },
        {
            code: 'new errors.GhostError()'
        }
    ],
    invalid: [
        {
            code: `new errors.ValidationError('some message here')`,
            // we can use messageId from the rule object
            errors: [{messageId: 'requireObject'}]
        },
        {
            code: `new EmailError('some message here')`,
            // we can use messageId from the rule object
            errors: [{messageId: 'requireObject'}]
        }
    ]
});
