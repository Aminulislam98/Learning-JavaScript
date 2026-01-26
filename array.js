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
