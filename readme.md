# is-compressed

> Check if a file path is a compressed file

## Install

```sh
npm install is-compressed
```

## Usage

```js
import isCompressed from 'is-compressed';

isCompressed('source/unicorn.zip');
//=> true

isCompressed('source/unicorn.txt');
//=> false
```

## Related

- [compressed-extensions](https://github.com/sindresorhus/compressed-extensions) - List of compressed file extensions
