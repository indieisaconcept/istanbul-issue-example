'use strict';

/**
 * @name sum
 * @description add numbers together
 * @param {array}      args     - numbers to add
 * @returns {function}
 */

module.exports = function sum (...args) {

    let result = args.reduce((acc, value) => {
        acc += value;
        return acc;
    }, 0);

    return result;
};
