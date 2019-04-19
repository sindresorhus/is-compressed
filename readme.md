# is-compressed [![Build Status](https://travis-ci.org/sindresorhus/is-compressed.svg?branch=master)](https://travis-ci.org/sindresorhus/is-compressed)

> Check if a filepath is a compressed file


## Install

```
$ npm install is-compressed
```


## Usage

```js
const isCompressed = require('is-compressed');

isCompressed('src/unicorn.zip');
//=> true

isCompressed('src/unicorn.txt');
//=> false
```


## Related

- [compressed-extensions](https://github.com/sindresorhus/compressed-extensions) - List of compressed file extensions


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
