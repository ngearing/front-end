# Bugs and errors

A bug is when something unintended happens

An error is a mistake in the code that prevents it from running correctly.

- Syntax error: THis type of error where there is a mistake in the syntax of the code.
- Reference error: This type of error occurs when you use a object, variable or function without having declared or referenced it previously.
- Type error: This type of error happens when you try to run a method on the wrong data type. Eg. trying to call `.pop` on a `number`.

## Try, catch, throw

Try & catch block are used to catch errors within the try block. You can then handle the error in the catch block and this will not stop your program.

You can throw your own errors with throw new Error(); or;

- ReferenceError();
- SyntaxError();
- TypeError();

## Syntax, logical, runtime errors

ReferenceError gets thrown when you try to use a variable that hasn't been declared anywhere.

SyntaxError any kind of invalid javascript code will cause this.

TypeError is thrown when trying to run a method on a non-supported data type.
For example `pop()` on a `string`.

## undefined, null, empty

Null is an absence of any value. And is sometimes returned by functions.

Undefined means nothing has been assigned yet. It is common for functions to return this. Or trying to access a property value that does not exist.

Empty string `""` is different from `null` and `undefined`, they are considered false in boolean contexts.

## Defensive programming

Defensive programming is assuming that all arguments passed to a function are of the wrong type or the wrong value.
You are assuming things will go wrong and thinking about scenarios and what could go wrong.
