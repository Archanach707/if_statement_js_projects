// without prompt user name and age
const userName = "Archana";
const userAge = 30;

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if (userAge >= 18 && userAge <= 30) {
  console.log(`${userName} is a college student.`);
  console.log('And he/she learning computer science');
}

const userName1 = prompt("Please enter a name");
const userAge1 = prompt("Please enter a age");

console.log(`Name: ${userName1}`);
console.log(`Age: ${userAge1}`);

if (userAge1 >= 18 && userAge1 <= 24) {
  console.log(`${userName1} is a college student.`);
  console.log('And he/she learning computer science');
}

if (userAge1 >= 25 && userAge1 <= 45) {
  console.log(`${userName1} is a working professional.`);
  console.log('And he/she a web developer');
}

if (userAge1 > 45) {
  console.log(`${userName1} is retired.`);
  console.log('And he/she read newspaper');
}


console.log("Program Ended!!!");