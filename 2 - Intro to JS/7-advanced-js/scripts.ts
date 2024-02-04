const car = { engine: 4 };

const fastCar = Object.create(car);
fastCar.speed = "fast";

for (prop in fastCar) {
	console.log(prop + ": " + fastCar[prop]);
}
/* This will output:
    speed: fast
    engine: 4
*/

for (prop of Object.keys(fastCar)) {
	console.log(prop + ": " + fastCar[prop]);
}
/* This will output:
    speed: fast
*/

// Map
const map = new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");
map.set(4, "Four");

map.values();
map.keys();

console.log(map);

// Set
const set = new Set([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7]);
console.log(set);
