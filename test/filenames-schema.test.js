const assert = require('node:assert/strict');
const {test} = require('node:test');
const {getPrefixedPluginRules} = require('../lib/plugins');

const rules = getPrefixedPluginRules();

test('filenames/match-regex should be an object-style rule with schema', function () {
    const rule = rules['filenames/match-regex'];

    assert.equal(typeof rule, 'object');
    assert.equal(typeof rule.create, 'function');
    assert.ok(rule.meta, 'rule should have meta property');
    assert.ok(Array.isArray(rule.meta.schema), 'rule should have meta.schema array');

    const schema = rule.meta.schema;

    // Option 1: regex pattern string
    assert.deepEqual(schema[0], {type: 'string'});
    // Option 2: ignoreExporting (boolean or null)
    assert.deepEqual(schema[1], {type: ['boolean', 'null']});
    // Option 3: ignoreExportingClass (boolean or null)
    assert.deepEqual(schema[2], {type: ['boolean', 'null']});
});

test('filenames/no-index should be an object-style rule with empty schema', function () {
    const rule = rules['filenames/no-index'];

    assert.equal(typeof rule, 'object');
    assert.equal(typeof rule.create, 'function');
    assert.ok(rule.meta, 'rule should have meta property');
    assert.ok(Array.isArray(rule.meta.schema), 'rule should have meta.schema array');
    assert.equal(rule.meta.schema.length, 0, 'no-index takes no options');
});