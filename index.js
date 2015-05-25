'use strict';
var path = require('path');
var compressedExtensions = require('compressed-extensions');
var exts = Object.create(null);

compressedExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};
