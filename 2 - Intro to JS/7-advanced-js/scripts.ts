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
