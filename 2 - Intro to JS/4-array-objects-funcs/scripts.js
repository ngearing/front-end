function letterFinder(word, match) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] == match) {
			console.log("Found the", match, "at", i);
		} else {
			console.log("---No match found at", i);
		}
	}
}

var test = letterFinder("test", "t");

function addTwoNums(a, b) {
	try {
		if (typeof a != "number") {
			throw new ReferenceError("the first argument is not a number");
		} else if (typeof b !== "number") {
			throw new ReferenceError("the second argument is not a number");
		} else {
			console.log(a + b);
		}
	} catch (err) {
		console.log("Error!", err);
	}

	console.log("It still works");
}

var test2 = addTwoNums(5, "5");

// Same function but with defensive programming.
function letterFinder2(word, match) {
	var wordCheck = typeof word == "string" && word.length > 2;
	var matchCheck = typeof match == "string" && match.length == 1;

	if (!wordCheck || !matchCheck) {
		console.log("Please pass correct arguments to the function");
		return;
	}

	for (let i = 0; i < word.length; i++) {
		if (word[i] == match) {
			console.log("Found the", match, "at", i);
		} else {
			console.log("---No match found at", i);
		}
	}
}

var test = letterFinder2("test2", "t");
