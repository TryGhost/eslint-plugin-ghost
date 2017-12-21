'use strict';

const base = require('./config/base');
const node = require('./config/node');

module.exports = {
    configs: {
        base: require('./config/base'),
        node: require('./config/node'),
        test: require('./config/test')
    }
};
