`use strict`;

// let a = 2;

// console.log("Busola");

// console.info("Ak");

// console.warn("london");

// console.error("taurus");


// let mytxt = "this is busola";

// console.log("This is now %c the end of the exercises. " +mytxt, "color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");


// let a = 1;
// const b = 2;

// var c = 3;

// let aBoolean = true;
// console.log(aBoolean);

// let aNumber = 6;
// console.log(aNumber);

// let aString = 'text';
// console.log(aString);

// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

// let a = 100;
// while (a <= 200) {
// a++;
// console.log(`a = ${a}`);
// }

// for(let i = 0; i < 10; i++) {
//   for(let e = 1; e <= 10; e++) {
//       console.log(e)
//   }
//}

let puppies = 0;
let notEnoughPups = true;

while (notEnoughPups) {
  console.log("Another pup");
  puppies++;

  if (puppies > 238) {
    notEnoughPups = false;
  }
}
console.log("Oh so many puppies!");