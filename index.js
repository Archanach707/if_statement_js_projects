// without prompt user name and age
// const userName = "Archana";
// const userAge = 30;

// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);

// if (userAge >= 18 && userAge <= 30) {
//   console.log(`${userName} is a college student.`);
//   console.log('And he/she learning computer science');
// }

const userName1 = prompt("Please enter a name") || "Archana Chauhan";
const userAge1 = prompt("Please enter a age") || 22;

console.log(`Name: ${userName1}`);
console.log(`Age: ${userAge1}`);

if (userAge1 >= 0 && userAge1 <= 4) {
  console.log(`${userName1} is a kid.`);
  console.log('And he/she playing.');
}

else if (userAge1 >= 5 && userAge1 <= 17) {
  console.log(`${userName1} is a school student.`);
  console.log('And he/she learning science and maths');
}

else if (userAge1 >= 18 && userAge1 <= 24) {
  console.log(`${userName1} is a college student.`);
  console.log('And he/she learning computer science');
}

else if (userAge1 >= 25 && userAge1 <= 45) {
  console.log(`${userName1} is a working professional.`);
  console.log('And he/she a web developer');
}

else if (userAge1 > 45 && userAge1 < 121) {
  console.log(`${userName1} is retired.`);
  console.log('And he/she read newspaper');
}

else if (userAge1 > 121) {
  console.log(`${userName1} is immortal.`);
  console.log('And he/she read novels');
}

else if (userAge1 < 0) {
  console.log('Please enter a valid age');
}

console.log("Program Ended!!!");