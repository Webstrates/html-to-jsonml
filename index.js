const parse5 = require('parse5');
const jsonmlAdapter = require('./jsonml-adapter.js');

module.exports = html => parse5.parse(html, { treeAdapter: jsonmlAdapter })[0];