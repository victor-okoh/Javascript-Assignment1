//Student Scores
//A student scored
//English = 75
//Mathematics = 82
//Computer Science = 91
//Create Variables for three scores
//Calculate the Total Score
//Calculate the Average score
//Bonus: Find out how to display the average to only 2 decimal places

let english = 75;
let mathematics = 82;
let computer = 91;

let totalScore = english + mathematics + computer;
let averageScore = totalScore / 3;

console.log(totalScore);
console.log(averageScore);
console.log(averageScore.toFixed(2));