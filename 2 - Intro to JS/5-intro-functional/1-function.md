# Functional programming

There are various styles of programming or programming paradigms. There are 2 commonly used paradigms. Functional programming FP and Object-oriented programming OOP.

In functional programming there is a clear separation of data and structure.

And in object-orientated programming the code is orgranised around both data and structure, combining them into objects that house related data and functions.

**Function programming styles:**

- First-class function, in javascript functions are just a value and can be passed to other functions. They can also return another function as the result. This makes them first class citizens.
- High-order functions take other functions as arguments or return functions as values. Examples include map, reduce, filter etc.
- Pure functions are function cause no side-affects (i.e., they don't change any state or data outside themselves). They always return same value given the same input.

## Recursion

Recursion is when a function calls itself to keep repeating itself until a condition is met.
Example in javascript:

```
function factorial(n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n factorial is n times (n-1) factorial
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```
