import {expectType} from 'tsd';
import isCompressed = require('.');

expectType<boolean>(isCompressed('src/unicorn.zip'));
