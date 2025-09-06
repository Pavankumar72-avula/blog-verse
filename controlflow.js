let marks = 85;
if (marks >= 90) {
    console.log("A+ grade");
}
else if (marks >= 80) {
    console.log("A grade");
}
else if (marks >= 70) {
    console.log("B+ grade");
}
else {
    console.log("fail");

}
let day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;

    default:
        console.log("invalid day");
}
//let count =0;
for (let count = 1; count <= 6; count++) {
    console.log("coldplay", count);
}
do {
    console.log("marks:", marks);
    marks -= 5;
}// while (marks > 60);
while (marks >= 70) {
    console.log("you are passed");
    marks -= 10;
} 

let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
for(let color of colors){
    console.log(color);
}
let person = {
    name: "pavan",
    age: 19,
    city: "elr"
}
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

for (let i=5;i>=0;i--)
{
if(i===3)
{
    continue;
}
else if(i===2)
{
    break;
}console.log(i);
}
