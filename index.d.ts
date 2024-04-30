/**
Check if a file path is a compressed file.

@example
```
import isCompressed from 'is-compressed';

isCompressed('source/unicorn.zip');
//=> true

isCompressed('source/unicorn.txt');
//=> false
```
*/
export default function isCompressed(filePath: string): boolean;
