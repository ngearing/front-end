# Advanced JS Features

## De-structuring arrays and objects

De-structuring is coping an item/property from a array or object and placing it somewhere else.

These 2 items are the same but are not connected.

```js
let (PI) = Math;
console.log(Math.PI === PI); // true
PI = 1;
console.log(Math.PI === PI); // false
```

You can also de-structure arrays...

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
