/**
Check if a filepath is a compressed file.

@example
```
import isCompressed = require('is-compressed');

isCompressed('src/unicorn.zip');
//=> true

isCompressed('src/unicorn.txt');
//=> false
```
*/
declare function isCompressed(filepath: string): boolean;

export = isCompressed;
