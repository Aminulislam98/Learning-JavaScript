// Free Drinks
// Burger more than 500 tk : free coke
// else Coke : 30Tk

// let burgerPrice = 400;
// if (burgerPrice > 500) {
//   console.log("Congrats! You are eligible for free Drink: Coke");
// } else {
//   console.log("You have to pay 30Tk for Coke if you want to buy!");
// }
// shorthand ternary operator
// let burgerPrice = 400;
// burgerPrice > 500
//   ? console.log("Congrats! You are eligible for free Drink: Coke")
//   : console.log("You have to pay 30Tk for Coke if you want to buy!");

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
// let weight = 64;
// let feet = 5;
// let inches = 6;
// let heightInMeter = (feet * 12 + inches) * 0.0254;
// let bmi = weight / (heightInMeter * heightInMeter);

// if (bmi < 18.5) {
//   console.log("You are underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("You are normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("You are overweight");
// } else {
//   console.log("You are obese");
// }

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// let totalMark = 60;
// if (totalMark >= 90 && totalMark <= 100) {
//   console.log("Your Grade is : A");
// } else if (totalMark >= 80 && totalMark <= 89) {
//   console.log("Your Grade is : B");
// } else if (totalMark >= 70 && totalMark <= 79) {
//   console.log("Your Grade is : C");
// } else if (totalMark >= 60 && totalMark <= 69) {
//   console.log("Your Grade is : D");
// } else if (totalMark >= 0 && totalMark <= 59) {
//   console.log("Your Grade is : F");
// } else {
//   console.log("Not valid Number!");
// }

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let score = 60;
// let myScore = 89;
// if (myScore > 80) {
//   if (score > 80) {
//     console.log("Go for lunch");
//   } else if (score < 80) {
//     if (score >= 60) {
//       console.log("Good Luck Next Time");
//     } else if (score < 60 && score >= 40) {
//       console.log("Keep Your Friend message Unseen");
//     } else if (score < 40) {
//       console.log("Block Your friends");
//     }
//   }
// } else {
//   console.log("Go Home and sleep and act sad");
// }

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 8;
// let num2 = 5;
// let result = null;

// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }
// console.log(result);

// let num1 = 8;
// let num2 = 5;
// let result = null;

// result = num1 > num2 ? num1 * 2 : num1 + num2;

// console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 10;
let isStudent = true;
let ticketPrice = 800;
if (age < 10) {
  console.log("Traveling Free for under 10 year old");
} else if (age >= 60) {
  console.log("Congratulation! You are eligible for 15% discount!");
  const discount = (ticketPrice * 15) / 100;
  const totalPay = ticketPrice - discount;
  console.log(`You have to pay after discount ${totalPay}`);
} else if (isStudent) {
  console.log("Congratulation You are eligible for 50% discount");
  const discount = (ticketPrice * 50) / 100;
  const totalPay = ticketPrice - discount;
  console.log(`50% discount for student : please pay ${totalPay}`);
} else {
  console.log(
    `Sorry You are not eligible for any discount. Please Pay ${ticketPrice}`,
  );
}
