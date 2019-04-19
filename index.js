'use strict';
const path = require('path');
const compressedExtensions = require('compressed-extensions');

const extensions = new Set(compressedExtensions);

module.exports = filepath => {
	return extensions.has(path.extname(filepath).slice(1).toLowerCase());
};
