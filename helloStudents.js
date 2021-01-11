"use strict";

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const students = require("./students.json");
let count = 0;
students.forEach(({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
  if (lastName.startsWith("D")) count++;
});
console.log(`Count of last names starting with D is ${count}`);
