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

## For of loops

`for (var item of items) {}` for of loop can loop over iterable objects like Arrays & String. It is important to note the Objects are not iterable.

```js
// Arrays
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
	console.log(color);
}

// Strings
const myString = "Hello World";
for (var letter of myString) {
	console.log(letter);
}

// Objects
const person = { name: "John", age: 30 };
for (var prop of person) {
	console.log(prop);
}
// Uncaught TypeError: person is not iterable
```

As you can see above an Object is not iterable.
But we can use `Object.keys()`, `Object.values()`,`Object.entries()` to make it iterable.

```js
for (var prop of Object.keys(person)) {
	console.log(`${prop}: ${person[prop]}`);
}
// Output : name: John
//          age: 30
```
