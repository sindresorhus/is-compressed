import test from 'ava';
import isCompressed from '.';

test('main', t => {
	t.true(isCompressed('unicorn.zip'));
	t.true(isCompressed('unicorn.7z'));
	t.true(isCompressed('unicorn.ZIP'));
	t.false(isCompressed('unicorn.png'));
	t.false(isCompressed('unicornzip'));
	t.false(isCompressed('unicorn.txt'));
});
