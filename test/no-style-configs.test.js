const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {test} = require('node:test');
const noStyleRules = require('../lib/config/no-style-rules');

const noStyleConfigNames = [
    ['browser-no-style', 'browser'],
    ['ember-no-style', 'ember'],
    ['node-no-style', 'node'],
    ['es-no-style', 'es'],
    ['ts-no-style', 'ts'],
    ['filenames-no-style', 'filenames'],
    ['test-no-style', 'test'],
    ['ts-test-no-style', 'ts-test']
];

test('no-style override rules are all disabled', function () {
    for (const [ruleName, ruleValue] of Object.entries(noStyleRules)) {
        assert.equal(ruleValue, 'off', `${ruleName} should be off`);
    }
});

test('no-style presets are exported', function () {
    const indexSource = fs.readFileSync(path.join(__dirname, '..', 'lib', 'index.js'), 'utf8');

    for (const [noStyleName] of noStyleConfigNames) {
        assert.match(indexSource, new RegExp(`'${noStyleName}'\\s*:`), `${noStyleName} should be exported in lib/index.js`);
    }
});

for (const [noStyleName, baseName] of noStyleConfigNames) {
    test(`${noStyleName} extends ${baseName} and disables style rules`, function () {
        const config = require(`../lib/config/${noStyleName}`);

        assert.equal(config.extends, require.resolve(`../lib/config/${baseName}`));

        for (const [ruleName, ruleValue] of Object.entries(noStyleRules)) {
            assert.equal(config.rules[ruleName], ruleValue, `${noStyleName} should set ${ruleName} to off`);
        }
    });
}
