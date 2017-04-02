'use strict';

import test from 'ava';
import sum from '../broken';

test('is correctly defined', t => {
    t.is(typeof sum, 'function', 'should be a function');
});

test('returns sum of all supplied values', t => {

    let result = sum(1, 2, 3, 4);
    t.is(result, 10);
});
