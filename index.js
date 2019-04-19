'use strict';
const path = require('path');
const compressedExtensions = require('compressed-extensions');

const extensions = new Set(compressedExtensions);

module.exports = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());

