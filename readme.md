# is-compressed

> Check if a file path is a compressed file


## Install

```
$ npm install is-compressed
```


## Usage

```js
const isCompressed = require('is-compressed');

isCompressed('source/unicorn.zip');
//=> true

isCompressed('source/unicorn.txt');
//=> false
```


## Related

- [compressed-extensions](https://github.com/sindresorhus/compressed-extensions) - List of compressed file extensions


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
