let person = {
    name: "pavan",
    age: 19
}
console.log(person.name);
console.log(person["age"]);
const { name, age } = person; //destructuring assignment
console.log(name)
console.log(age)

let fruits = ["apple", "banana", "grapes", "mango"];
console.log(fruits[2]);
//fruits.push("orange");
let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map((num) => num * num); //transform each element
console.log(squares);
let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);
let sum = numbers.reduce((present, num) => present + num, 0);
console.log(sum);

let object = [{ name: "pavan", age: 19 ,marks:87},
{ name: "kumar", age: 20 ,marks:76},
{name: "madhu", age: 21 ,marks:89}];
let maxMarks=0;
let topper="";
for(let obj of object){
    if(obj.marks>maxMarks){
        maxMarks=obj.marks;
        topper=obj.name;
    }   
}
console.log(`topper is ${topper} with marks ${maxMarks}`);


