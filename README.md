# istanbul issue example

This repo illustrates how istanbul can skip coverage of a named function should said function have a locally scoped variable of the same name.

```JavaScript
module.exports = function sum (...args) {

    let sum = args.reduce((acc, value) => {
        acc += value;
        return acc;
    }, 0);

    return sum;
};
```

## overview

- `./working.js` baseline comparison
- `./broken.js` illustrates the issue

## usage

`> npm run cover`
