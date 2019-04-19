/**
Check if a file path is a compressed file.

@example
```
import isCompressed = require('is-compressed');

isCompressed('source/unicorn.zip');
//=> true

isCompressed('source/unicorn.txt');
//=> false
```
*/
declare function isCompressed(filePath: string): boolean;

export = isCompressed;
