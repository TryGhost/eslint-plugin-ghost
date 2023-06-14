const {RuleTester} = require('eslint');
const nodeAssertMethods = require('../lib/custom/rules/node-assert-methods');
const ruleTester = new RuleTester();

ruleTester.run('node-assert-methods', nodeAssertMethods, {
    valid: [
        {
            code: `assert.ok(result.arr.value === 100)`
        },
        {
            code: `assert.equal(result.arr.value, 100)`
        }
    ],
    invalid: [
        {
            code: `assert(result.arr.value === 100)`,
            // we can use messageId from the rule object
            errors: [{messageId: 'requireMethod'}]
        },
        {
            code: `assert(result.arr.value)`,
            // we can use messageId from the rule object
            errors: [{messageId: 'requireMethod'}]
        }
    ]
});
