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

### For in vs For of

- for ...in loop iterates over properties of an object AND it's prototype
- for ...of loop iterates only over the objects properties.

Example:

```js
const car = { engine: 4 };

const fastCar = Object.create(car);
fastCar.speed = "fast";

for (prop in fastCar) {
	console.log(prop + ": " + fastCar[prop]);
}
/* This will output:
   engine: 4
   speed: fast
*/

for (prop of Object.keys(fastCar)) {
	console.log(prop + ": " + fastCar[prop]);
}
/* This will output:
    speed: fast
*/
```

## Spread

ES6 feature. Allows to extract values from arrays or strings into separate variables, or to merge multiple arrays into one.

**Spread array as arguments**
`someFuncWithMultipleParameters(...arrayToSpread);`

**Combine arrays**
`let combinedArray = [...arr1, ...arr2];`

**Copy an array**
`let fruits1 = ['apples', 'pears'];`
`let fruits2 = [...fruits1];`

**Merge objects**
`let mergedObject = {...obj1, ...obj2};`

**Create a shallow copy of an object**
`let copiedObj = {...originalObj};`

## Rest

The rest parameter allows you to collect all the remaining parameters into an array. It is useful when you don’t know how many arguments are going to be passed to your function.

Often combined with destructuring to get all the remaining properties into one variable.

Example:

```js
function myFunction({ a, b, ...remaining }) {
	// do something with `a`, `b` and `remaining`
}

myFunction({ a: 1, b: 2, c: 3, d: 4 });

const [first, second, third, ...rest] = arrayOfItems;
```

You can also use Rest in functions to accept any number of parameters (including zero).

```js
function addTaxToPrice(taxRate, ...itemsBought) {
	return itemsBought.map((item) => taxRate * item);
}
```

Rest parameter must the last parameter in the function.
