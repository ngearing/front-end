# Testing

## What is testing

When you want to make sure something works you test it right?

Testing frameworks mean you dont have to write a many comments. Comments are good for explaining why, not how.

```js
function concatStrings(strA, strB) {
	return strA + strB;
}
concatString("abc", "def"); // Expected to be abcdef
// Jest framework.
except(concatString("abc", "def")).toBe("abcdef");
```

## Refactoring

Refactoring means improving the code without changing its functionality.

## TDD

Test driven development.

1. Write failing test
2. Re-write code to pass
3. Optimize code without changing its results

## Types of testing

1. e2e
   Tries to imitate how a user would interact with your app. Eg. pressing the login button, adding a product to the cart.

**e2e testing frameworks**

- webdriver js
- protractor
- cypress

2. Integration
   How part of your system interact with other bits of software, like databases or APIs.
   Integration testing are faster than e2e but not as fast as Unit tests.

**integration testing frameworks**

- React testing
- enzyme

3. Unit tests
   Testing small units of your code in isolation. Like functions. They are fast to run and easy to write.

## Jest

Code coverage, mocking and snapshots. Built by Meta.

- Code coverage, measure how much of your code is covered by tests.
- Mocking, separate code from its dependencies.
- Snapshot verify there is no regression in the DOM after some changes were made.

```js
// addFive.js
function addFive(val) {
	return val * 5;
}

module.exports = addFive;

// addFive.test.js
const addFive = require("./addFive.js");

test("returns the number plus 5", () => {
	expect(addFive(1)).toBe(6);
});
```

# TDD

1. Get requirements or feature
2. Write a failing test
3. Write code to pass the test
4. Refactor if necessary

```js
//1. write test first, does the function exist
test("returns true if statusOfKeys exists", function () {
	expect(statusOfKeys).toExist();
});

//2. make it work
function statusOfKeys() {}
```
