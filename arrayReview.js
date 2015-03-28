//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
var threeItems = [1,2,3];

  //code here
var last = function(array) {
	alert (array[array.length - 1]);
};

last(threeItems)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
for(var i = 0; i < evenArray.length; i++) {
	if(evenArray[i] % 2 !== 0) {
		evenArray.splice(i, 1);
	};
};

alert(evenArray)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
var looper = function() {
	var ranNum = getRandomArbitrary();
		alert("ranNum: ", ranNum)
	var inArray = false;
	for(var i = 0; i < randomArray.length; i++) {
		if(randomArray[i] === ranNum) {
			inArray = true;
		}
	};
	alert(inArray)
};

looper();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

  //code here
second.push(first, 6, 7);
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
var longest = function(string) {
	var sentArr = string.split(" ");
	var word = "";
	for(var i = 0; i < sentArr.length; i++) {
		if(sentArr[i] > word.length) {
			word = sentArr[i];
		}
	};
	alert(word);
};

longest(sentence)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
var capitalize = function(string) {
	var sentArr = string.split(" ");
	var newSent = [];
	for(var i = 0; i < sentArr.length; i++) {
		var firstLetter = sentArr[i].charAt(0).toUpperCase();
		var restLetters = sentArr[i].slice(1);
		
		newSent[i] = firstLetter + restLetters;

	}
	return alert(newSent.join(" "));
};

capitalize(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var vowelCounter = function(string) {
	var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
	var sentArr = string.split("");
        alert(sentArr)
	var numVowels = [];
	for(var i = 0; i < sentArr.length; i++) {
		for(var j = 0; j < vowels.length; j++) {
			if(sentArr[i] === vowels[j]) {
				numVowels.push(sentArr[i])
			}
		};
	};
    
    return alert(numVowels, ":", numVowels.length);
};

vowelCounter(theOdyssey);