import path from 'node:path';
import compressedExtensions from 'compressed-extensions';

const extensions = new Set(compressedExtensions);

export default function isCompressed(filePath) {
	return extensions.has(path.extname(filePath).slice(1).toLowerCase());
}
