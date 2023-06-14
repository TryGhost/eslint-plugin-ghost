const {RuleTester} = require('eslint');
const nodeAssertParams = require('../lib/custom/rules/node-assert-params');
const ruleTester = new RuleTester();

// we can use messageId from the rule object
const errors = [{messageId: 'forceOrder'}];

const valid = [
    `assert.equal(linkRedirectRepository.save.callCount, 1);`,
    `assert.equal(linkRedirectRepository.save.getCall(0).args[0].from.toString(), 'https://localhost:2368/a');`,
    `assert.equal(linkRedirectRepository.save.getCall(0).args[0].to.toString(), 'https://localhost:2368/b');`,
    `assert.equal(require('../index').LinkRedirectsService, LinkRedirectsService);`,
    `assert.deepEqual(myVar, 'somestring')`,
    `assert.deepStrictEqual(myVar, 'somestring')`,
    `assert.equal(myVar, 'somestring')`,
    `assert.strictEqual(myVar, 'somestring')`,
    `assert.notDeepEqual(myVar, 'somestring')`,
    `assert.notDeepStrictEqual(myVar, 'somestring')`,
    `assert.notEqual(myVar, 'somestring')`,
    `assert.notStrictEqual(myVar, 'somestring')`,
    `assert.ok(myVar)`
];

const invalid = [
    `assert.equal('hello', 'hello');`,
    `assert.deepEqual('somestring', myVar)`,
    `assert.deepEqual(null, myVar)`,
    `assert.deepEqual(undefined, myVar)`,
    `assert.deepEqual(true, myVar)`,
    `assert.deepEqual(false, myVar)`,
    `assert.deepEqual(3, myVar)`,
    `assert.deepEqual([], myVar)`,
    `assert.deepEqual({}, myVar)`,
    `assert.deepStrictEqual('somestring', myVar)`,
    `assert.deepStrictEqual(null, myVar)`,
    `assert.deepStrictEqual(undefined, myVar)`,
    `assert.deepStrictEqual(true, myVar)`,
    `assert.deepStrictEqual(false, myVar)`,
    `assert.deepStrictEqual(3, myVar)`,
    `assert.deepStrictEqual([], myVar)`,
    `assert.deepStrictEqual({}, myVar)`,
    `assert.equal('somestring', myVar)`,
    `assert.equal(null, myVar)`,
    `assert.equal(undefined, myVar)`,
    `assert.equal(true, myVar)`,
    `assert.equal(false, myVar)`,
    `assert.equal(3, myVar)`,
    `assert.equal([], myVar)`,
    `assert.equal({}, myVar)`,
    `assert.strictEqual('somestring', myVar)`,
    `assert.strictEqual(null, myVar)`,
    `assert.strictEqual(undefined, myVar)`,
    `assert.strictEqual(true, myVar)`,
    `assert.strictEqual(false, myVar)`,
    `assert.strictEqual(3, myVar)`,
    `assert.strictEqual([], myVar)`,
    `assert.strictEqual({}, myVar)`,
    `assert.notDeepEqual('somestring', myVar)`,
    `assert.notDeepEqual(null, myVar)`,
    `assert.notDeepEqual(undefined, myVar)`,
    `assert.notDeepEqual(true, myVar)`,
    `assert.notDeepEqual(false, myVar)`,
    `assert.notDeepEqual(3, myVar)`,
    `assert.notDeepEqual([], myVar)`,
    `assert.notDeepEqual({}, myVar)`,
    `assert.notDeepStrictEqual('somestring', myVar)`,
    `assert.notDeepStrictEqual(null, myVar)`,
    `assert.notDeepStrictEqual(undefined, myVar)`,
    `assert.notDeepStrictEqual(true, myVar)`,
    `assert.notDeepStrictEqual(false, myVar)`,
    `assert.notDeepStrictEqual(3, myVar)`,
    `assert.notDeepStrictEqual([], myVar)`,
    `assert.notDeepStrictEqual({}, myVar)`,
    `assert.notEqual('somestring', myVar)`,
    `assert.notEqual(null, myVar)`,
    `assert.notEqual(undefined, myVar)`,
    `assert.notEqual(true, myVar)`,
    `assert.notEqual(false, myVar)`,
    `assert.notEqual(3, myVar)`,
    `assert.notEqual([], myVar)`,
    `assert.notEqual({}, myVar)`,
    `assert.notStrictEqual(null, myVar)`,
    `assert.notStrictEqual(undefined, myVar)`,
    `assert.notStrictEqual(true, myVar)`,
    `assert.notStrictEqual(false, myVar)`,
    `assert.notStrictEqual(3, myVar)`,
    `assert.notStrictEqual([], myVar)`,
    `assert.notStrictEqual({}, myVar)`
];

ruleTester.run('node-assert-params', nodeAssertParams, {
    valid: valid.map((code) => {
        return {
            code
        };
    }),
    invalid: invalid.map((code) => {
        return {
            code,
            errors
        };
    })
});