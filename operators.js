//arithmetic operators
let x = 4;
let y = 2;
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

//assignment operators
let z = 50;
z += 2;
console.log(z);
z -= 4;
console.log(z);
z *= 2;
console.log(z);
z /= 2;
console.log(z);
z **= 2;
console.log(z);
z %= 2;
console.log(z);

//comparsion operators
let a = 32;
let b = "32";
console.log(a == b)
console.log(a != b)
console.log(a === b)
console.log(a !== b)
console.log(a <= b)
console.log(a >= b)
console.log(a < b)
console.log(a > b)

//logical operators
let age = 20;
console.log(age > 19 && age < 29)
console.log(!(age < 18))

//string operators
let firstname = "pavan";
let lastname = "kumar";
let fullname = firstname + " " + lastname;
console.log(fullname);
let correctname = `hello ${firstname},cold play concert is coming soon`;
console.log(correctname);

//terminary operators
let myAge = 58;
if (myAge >= 18) {
    console.log("voting is allowed");
}
else {
    console.log("voting is not allowed");
}
let result = myAge >= 18 ? "eligible to vote" : "not eligible";
console.log(result);

//increment and decrement operators
let count = 7;
console.log(count++);
console.log(count);
console.log(++count);

//typeof operator
console.log(typeof count);
console.log(typeof "pavan");
console.log(typeof 16 )


