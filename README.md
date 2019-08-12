# Safe Decimals

**Safe Decimals** is a Node.js module that fixes the binary floating-point rounding "error" at the 17th decimal place of JavaScript numbers.

It does this using the simple and widespread *multiply-round-divide* technique.

## Installation

To start using Safe Decimals in your Node.js projects, first just need to install it through NPM:

```bash
npm i safe-decimals --save
```

## Requiring the module

In order to use it, you have to import it in your code:

```javascript
require('safe-decimals');
```

**P.S. 1** You don't need to store it on any variable, because Safe Decimals module doesn't export anything.

**P.S. 2** Safe Decimals will inject a function into the `Number` prototype. So you should require it in your code as soon as possible.

## How to use

Once imported, the module automatically provides a `safe()` function for all the `Number`s:

```javascript
const x = 0.1 + 0.2; // This will evaluate "x" as 0.30000000000000004 instead of 0.3
const newX = x.safe(); // newX == 0.3
```

Please note that Safe Decimals will never mutate your original number, so you can safely use it over any variable and store the result into a new one.

## Notes

Safe Decimals will work great if you don't need more than 15 decimals places. I think that's almost 100% of the cases. If you need more than that, you should look for another module that handles big decimals.

Please keep in mind that we shouldn't touch the built-in prototypes, so use Safe Decimals at your own risk.

The *multiply-round-divide* technique is a well-known workaround. This module just packs it into a Node.js module.