import {expectType} from 'tsd';
import isCompressed = require('.');

expectType<boolean>(isCompressed('source/unicorn.zip'));
