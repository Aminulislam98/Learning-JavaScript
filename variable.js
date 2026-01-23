// this is problem 1

// let apple = 300;
// let oranges = 200;
// let myMoney = 1000;
// console.log(
//   `Apple price is $${apple}
//    Oranges price is $${oranges}
//    Your total bil is $${apple + oranges}
//    you will get back ${myMoney - (apple + oranges)}
//    While you gave me $1000`,
// );

// problem number 2
// let bangla = 75.25;
// let english = 65;
// let math = 80;
// let history = 35.45;
// let ict = 99.5;
// const totalNumber = ((bangla + english + math + history + ict) / 5).toFixed(2);
// console.log(totalNumber);

// Problem 3
// let sampleInput = 119;
// let givenNumber = 5;
// console.log(sampleInput % givenNumber);

// Problem 4
// const a = isNaN("11");
// const b = isNaN(2 - 10);
// console.log(a);
// Output is = False
// console.log(b);
// Output is = False

//  Explanation of A
// a is false because isNaN("11") first converts the string "11" into a number.
// After conversion, the value becomes 11, which is a valid number.
// Since 11 is a number, isNaN returns false.

//  Explanation of B
// b is false because the expression 2 - 10 results in a number.
// The result is -8, which is a valid number.
// isNaN checks whether the value is NOT a number, and since -8 is a number,
// it returns false.

// const price = 4000;

// if (price > 3000) {
//   const discount = (price * 10) / 100;
//   const payMoney = price - discount;
//   console.log(
//     `Congratulation! You are eligible for 10% discount. Total Pay: ${payMoney}`,
//   );
// } else {
//   console.log(
//     "No discount applied! If you want to get discount you have to shop for at least $3000",
//   );
// }

const age = 17;

age >= 18
  ? console.log("You can vote")
  : console.log("You can not vote because you are under 18 years old");
