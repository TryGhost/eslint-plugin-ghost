const {RuleTester} = require('eslint');
const nodeAssertStrict = require('../lib/custom/rules/node-assert-strict');
const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    }
}
);

ruleTester.run('node-assert-strict', nodeAssertStrict, {
    valid: [
        {
            code: 'const assert = require("assert/strict");'
        },
        {
            code: 'const assert = require("my-custom-assert-library");'
        },
        {
            code: 'function test() { const assert = require("assert/strict"); }'
        }
    ],
    invalid: [
        {
            code: 'const assert = require("assert");',
            errors: [{messageId: 'forceStrict'}]
        },
        {
            code: 'function test() { const assert = require("assert"); }',
            errors: [{messageId: 'forceStrict'}]
        }
    ]
});
