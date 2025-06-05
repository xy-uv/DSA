// Q1
const x = 99;
const y = 31;

const sum = x + y;
console.log(sum);

// Q2
const a = 33;
const b = "3";
const ans = a + b;
console.log(ans);

// Q3
console.log("The sum of x + y = " + (x + y));

// Q4
const given = Number(prompt("Enter a valid number: "));
console.log(given);

// Q5
//i
let ab = 39;
let bc = 91;
let ca;

ca = ab;
ab = bc;
bc = ca;
console.log(ab, bc);
// ii
ab = ab + bc;
bc = ab - bc;
ab = ab - bc;
console.log(ab, bc);
// iii
[bc, ab] = [ab, bc];
console.log(ab, bc);
