const {RuleTester} = require('eslint');
const noLimitAllRule = require('../lib/custom/rules/no-limit-all');
const ruleTester = new RuleTester();

ruleTester.run('no-limit-all', noLimitAllRule, {
    valid: [{
        code: 'query = {limit: 1}'
    }],
    invalid: [{
        code: 'query = {limit: \'all\'}',
        // we can use messageId from the rule object
        errors: [{messageId: 'noLimitAll'}]
    }]
});
