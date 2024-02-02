# Object-orientated programming

OOP helps to mimic the relationship between objects in the real world.
It helps you to reason about relationships between things in your software.

- Allows your to write modular code.
- Makes your code more flexible.
- Makes your code reusable.

## Principles of OOP

- Inheritance
- Encapsulation
- Abstraction
- Polymorphism

### Inheritance

Objects are build by inheriting properties from other objects. This allows for reusability.
Eg. A dog is a type of animal, so it can inherit all the characteristics of an animal (breathing, eating etc.). It also makes it easier to manage large amounts of code.
A class can inherit attributes and methods from another class, called a superclass or parent class.
The subclass (derived class) is known as a child class.

Example:

```js
class Animal {
	/* ...class code here... Attributes, methods, properties */
}
class Bird extends Animal {
	/* ...class code here... things specific to birds. */
}
class Eagle extends Bird {
	/*  ...class code here... things specific to eagles. */
}
```

### Encapsulation

Encapsulation means that we hide the internal state of an object and only expose what's necessary through public methods.
Users don't have to know how the code works in order to use/consume it.

Example:

```js
// Bad encapsulation example
let x = "I am private"; // Private variable
console.log(x); // Accessing private variable

// Good encapsulation example
class Box {
	constructor(privateColor) {
		this.color = privateColor;
	}

	getColor() {
		// Getter method
		return this.color;
	}
}
const myBox = new Box("red");
console.log(myBox.color); // Error! color is not defined
console.log(myBox.getColor()); // Prints red - accessing through getter method
```

### Abstraction

Abstraction is the practice of making code more general and easier to understand by hiding complex details. It provides a simplified interface for users to interact with.
Encapsulation and abstraction are often misunderstood because their meanings overlap.

- Abstraction is about extracting the concept of what you're trying to do, rather that dealing with a specific manifestation of that concept.
- Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

### Polymorphism

"Something that can take on many shapes"
Consider this:

- A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
- Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.
