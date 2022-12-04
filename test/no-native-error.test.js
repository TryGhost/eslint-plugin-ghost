const {RuleTester} = require('eslint');
const noNativeErorRule = require('../lib/custom/rules/no-native-error');
const ruleTester = new RuleTester();

ruleTester.run('no-native-error', noNativeErorRule, {
    valid: [
        {
            code: 'new Buffer()'
        },
        {
            code: 'new errors.GhostError()'
        },
        {
            code: 'new Error(); // eslint-disable-line no-native-error'
        }
    ],
    invalid: [{
        code: 'new Error()',
        // we can use messageId from the rule object
        errors: [{messageId: 'nativeError'}]
    }]
});
