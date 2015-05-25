'use strict';
var test = require('ava');
var isCompressed = require('./');

test(function (t) {
	t.assert(isCompressed('unicorn.zip'));
	t.assert(isCompressed('unicorn.7z'));
	t.assert(isCompressed('unicorn.ZIP'));
	t.assert(!isCompressed('unicorn.png'));
	t.assert(!isCompressed('unicornzip'));
	t.assert(!isCompressed('unicorn.txt'));
	t.end();
});
