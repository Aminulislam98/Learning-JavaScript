// JS array task
// 1. Declare an array

// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

// -------------Solution of Declare an array--------------
// let fruits = ["Mango", "Apple", "Tangerine", "Strawberry", "Banana"];
// console.log(fruits[3]);
// fruits[2] = "Jambura";
// console.log(fruits);

// -------------Solution of Add or remove elements--------------

// Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

// let place = ["Bangladesh", "England", "Canada"];
// place.push("America");
// console.log(place);
// place.push("Portugal", "Dubai");
// console.log(place);
// place.pop();
// console.log(place);

// -------------Solution of Checking Array Membership with ‘includes’--------------

// 3. Checking Array Membership with ‘includes’

// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
// let books = [
//   "Atomic Habit",
//   "How to win friend and family",
//   "Think and grow rich",
// ];
// console.log(books.includes("Atomic Habit"));
// console.log(books.includes("How to win friend and family"));

// -------------Solution of Array.isArray--------------
// 4. Checking if it's an Array

// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

// let array = [2, 3, 5, 6];
// let number = 3;
// let strings = "Aminul";
// console.log(Array.isArray(array));
// console.log(Array.isArray(number));
// console.log(Array.isArray(strings));

// -------------Solution of  Combining Arrays--------------

// 5. Combining Arrays

// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

// let array = ["Aminul", "Marjiya"];
// let array1 = [2, 3];
// console.log(array.concat(array1));

// let array = ["apple", "banana", "Pineapple"];
// for (const fruits of array) {
//   console.log(fruits);
//   console.log("Mm Yummy, I need more");
// }

/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

// let array = 0;
// while (array <= 60) {
//   console.log(
//     "I will invest at least 60 hrs every single day for next 60 days! ",
//     array++,
//   );
// }

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
// let array = 61;
// while (array <= 100) {
//   if (array % 2 !== 0) {
//     console.log("this is odd number", array);
//   }
//   array++;
// }

/***

Subtask-2:

Find all the even numbers from 78 to 98.
 */
/*programming hero*/

// let array = 78;
// while (array <= 98) {
//   if (array % 2 === 0) {
//     console.log("this is even number", array);
//   }
//   array++;
// }
/***
 * 
 * 

Generate a multiplication table for number 9

 */

/*programming hero*/

// for (table = 0; table <= 10; table++) {
//   console.log(`9 * ${table} = ${9 * table}`);
// }

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
// let total = 0;
// for (let i = 91; i < 129; i++) {
//   if (i % 2 !== 0) {
//     console.log(`Hi this is Odd number ${i}`);
//     total += i;
//   }
// }
// console.log(`this is the total of 91 to 129 = ${total}`);

/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
// let evenTotal = 0;
// for (let i = 51; i < 85; i++) {
//   if (i % 2 === 0) {
//     console.log(`This is the even number = ${i}`);
//     evenTotal += i;
//   }
// }
// console.log(`This is the total number from 51 to 85 = ${evenTotal}`);
/*programming hero*/

/***

Implement a countdown timer that counts down from 81 to 65.

 */
// for (let i = 81; i >= 65; i--) {
//   console.log(i);
// }

/*programming hero*/

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

// let i = 61;
// while (i <= 100) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

// let i = 78;
// while (i <= 98) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

// let i = 81;
// let total = 0;
// while (i <= 131) {
//   if (i % 2 !== 0) {
//     console.log(`this is odd number ${i}`);
//     total += i;
//   }
//   i++;
// }
// console.log(`This is total number from 81 to 131 = ${total}`);
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
// let i = 206;
// let total = 0;
// while (i <= 311) {
//   if (i % 2 === 0) {
//     console.log(`This is even number ${i}`);
//     total += i;
//   }
//   i++;
// }
// console.log(total);

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

// let i = 0;
// while (i <= 10) {
//   console.log(`5 * ${i} = ${5 * i}`);
//   i++;
// }

/***

Implement a countdown timer that counts down from 21 to 15.

 */
// let i = 21;
// while (i >= 15) {
//   console.log(i);
//   i--;
// }

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for (i = 1; i <= 200; i++) {
//   if (i > 100) {
//     break;
//   }
//   console.log(i);
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let i = 1;

// while (i < 200) {
//   if (i > 100) {
//     break;
//   }
//   console.log("while loop", i);
//   i++;
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// for (i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     break;
//   }
//   console.log(i);
// }

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// for (i = 1; i < 100; i++) {
//   let root = Math.sqrt(i);
//   if (Number.isInteger(root) && i !== 1) {
//     console.log(`Found the first square Number ${i}`);
//   }
// }

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for (let i = 1; i <= 40; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(`This is even number ${i}`);
// }

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// for (let i = 55; i <= 85; i++) {
//   if (i % 5 === 0) {
//     continue;
//   } else if (i % 2 !== 0) {
//     console.log(`This is odd number ${i}`);
//   }
// }

//Task-1

//Access the golden rod color value in output.

// const colors = {
//   red: "#ff0000",
//   green: "#00ff00",
//   blue: "#0000ff",
//   "golden rod": "#daa520",
// };
// console.log(colors["golden rod"]);

// Task-2

// For this object below add a property named passenger capacity with value 5

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };

// car["passenger capacity"] = 5;
// console.log(car);

// Task-3

// Display the physics marks as output.

// const student = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };
// console.log(student.physics.marks);

// Task-4

// Count the number of properties.

// Input:

// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };
// console.log(Object.keys(student).length);

// ask-5 (Hard)

// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {
//   name: "John Doe",
//   age: 25,
//   city: "Example City",
//   isStudent: true,
// };

// for (const object in myObject) {
//   console.log("key:", object, "|", "type:", typeof myObject[object]);
// }

// Output:

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

// Task-1:

// Count how many times a string has the letter a
// let fruits = "banana";
// let count = 0;
// for (const fruit of fruits) {
//   if (fruit == "a") {
//     count++;
//   }
// }
// console.log(count);

// Task-2:

// Count how many times a string has the letter a or A

// let fruits = "BAnana";
// let countOfLowerLetter = 0;
// let countOfUpperLetter = 0;
// for (const fruit of fruits) {
//   if (fruit === "a") {
//     countOfLowerLetter++;
//   } else if (fruit === "A") {
//     countOfUpperLetter++;
//   }
// }
// console.log(
//   "UpperLetter:",
//   countOfUpperLetter,
//   "LowerLatter:",
//   countOfLowerLetter,
// );

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
// let text = "education";
// text = text.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// let hasVowel = true;
// for (const vowel of vowels) {
//   if (!text.includes(vowel)) {
//     hasVowel = false;
//     break;
//   }
// }
// console.log(hasVowel);

// Task-4:

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// If a given string has either x, replace x by y.
// If the given string has X, replace it by Y.

// let text = "xX box";
// if (text.includes("x")) {
//   text = text.replace(/x/g, "y");
// }
// if (text.includes("X")) {
//   text = text.replace(/X/g, "Y");
// }
// console.log(text);

/* 
Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
Task-5:

Capitalize Every first Letter of each word in a String
*/
// let text = "hello world from javascript";
// let words = text.split(" ");

// let results = [];
// for (const word of words) {
//   let capitalWorld = word.charAt(0).toUpperCase() + word.slice(1);
//   results.push(capitalWorld);
// }
// let finalResult = results.join(" ");
// console.log(finalResult);

// Task 1

// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
// const colors = ["red", "blue", "green", "yellow", "orange"];
// let finalColor = [];
// for (const color of colors) {
//   finalColor.unshift(color);
// }
// console.log(finalColor);

/*
Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumber = [];
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     evenNumber.push(number);
//   }
// }
// console.log(evenNumber);
/* 

Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// let singleString = "";
// for (const number of numbers) {
//   singleString += number;
// }
// console.log(singleString);

/* 
Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

// let statement = "I am a hard working person";
// let stringStatement = statement.split(" ");
// let reverseWord = [];

// for (const stringStatementReverse of stringStatement) {
//   reverseWord.unshift(stringStatementReverse);
// }
// reverseWord = reverseWord.join(" ");
// console.log(reverseWord);

// Task 5

// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// let number = [1, 2, 3];
// let number1 = [];
// for (const num of number) {
//   number1.push(num);
// }
// number1[0] = 99;
// console.log("Original:", number, "Copy:", number1);

// Task 6

// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// let student = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 },
// ];
// for (const students of student) {
//   console.log(students.name, "Scored", students.marks);
// }

// Task 7

// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]

// let array = [
//   [1, 3],
//   [3, 4],
//   [5, 6],
// ];
// array[1][0] = 99;
// console.log(array);

// Task-1

// Take four parameters. Multiply the four numbers and then return the result
// function task1(a, b, c, d) {
//   return a * b * c * d;
// }
// const result = task1(2, 4, 6, 7);
// console.log(result);

// Task-2

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// function task2(num) {
//   if (num % 2 !== 0) {
//     return num * 2;
//   } else {
//     return num / 2;
//   }
// }
// const result = task2(2);
// console.log(result);

// Task-3

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// function make_avg(num, size) {
//   console.log("Size of this value: ", size);
//   let averageValue = 0;
//   for (const arr of num) {
//     averageValue += arr;
//   }
//   const finalAvgValue = averageValue / size;
//   return finalAvgValue;
// }
// let array = [3, 4, 5, 6, 7, 8];
// let result = make_avg(array, array.length);
// console.log(result);

// Task-4

// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(str) {
//   let totalBinaryString = 0;
//   for (const strNum of str) {
//     if (strNum === "0") {
//       totalBinaryString++;
//     }
//   }
//   return totalBinaryString;
// }
// let result = count_zero(
//   "01010101010101010100101010001010101010010101010101011001",
// );
// console.log("Total 0 is: ", result);

// Task-5

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
// function odd_even(integerValue) {
//   return integerValue % 2 === 0 ? "Even" : "Odd";
// }
// let result = odd_even(6);
// console.log(result);

// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// Formula: \(F=(C\times 1.8)+32\).

// function celsiusToFahrenheit(cel) {
//   let fahrenheit = cel * 1.8 + 32;
//   return fahrenheit;
// }
// let fahrenheit = celsiusToFahrenheit(12);
// console.log(fahrenheit);

// Task-2:

// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

// let numbers = [
//   5, 6, 11, 12, 98, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5,
// ];
// function find(numbers, find) {
//   let result = 0;
//   for (const num of numbers) {
//     if (num === find) {
//       result++;
//     }
//   }
//   return result ? result : "Not Found";
// }
// let result = find(numbers, 12);
// console.log(result);

// Task-3:

// // Write a function to count the number of vowels in a string.
// function vowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;
//   for (const string of str.toLowerCase()) {
//     if (vowels.includes(string)) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

// let result = vowels("marjiya");
// console.log(result);

// Task-4:

// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// function longestWord(sentence) {
//   let words = sentence.split(" ");
//   let longest = "";
//   for (const word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// let result = longestWord("i'm learning programming to become programmer");
// console.log(result);

// ask-5:

// Generate a random number between 10 to 20.
// console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10));
