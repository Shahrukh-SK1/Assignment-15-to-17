// Answer No. 1 (Array Literal Notation)

var studentNames = [];

// Answer No. 2 (Array Object Notation)

var studentNames = new Array();

// Answer No. 3 (String Array)

var stringArray = ["Shahrukh", "Rayyan", "Ali", "Danish", "Azeem"];


// Answer No. 4 (Numbers Array)

var numbersArray = [10, 20, 30, 40, 50];

// Answer No. 5 (Boolean Array)

var booleanArray = [true, false];


// Answer No. 6 (Mix Array)

var mixArray = ["Shahrukh", 1, true, "Rayyan", true, 2,];

// Answer No. 7 ()

var qualifications = ["SSC", " HSC", " BCS", " BS", " BCOM", " MS", " M. Phil.", " PhD"];

document.write("<h2>" + "Qualifications" + "</h2>" + "<br>");
document.write(qualifications);

document.write("<br>");
document.write("<br>");

// Answer No. 8 ()

var studentNames = ["Michael", "John", "Tony"];
var studentScore = [320, 230, 480];
var totalMarks = 500;

// console.log(studentNames);
// console.log(studentScore);


var percentageM =(studentScore[0] / totalMarks * 100 + "%");
var percentageJ =(studentScore[1] / totalMarks * 100 + "%");
var percentageT =(studentScore[2] / totalMarks * 100 + "%");

document.write("Score of " + studentNames[0] + " is " + studentScore[0] + ". Percentage:" + percentageM + "<br>");
document.write("Score of " + studentNames[1] + " is " + studentScore[1] + ". Percentage:" + percentageJ + "<br>");
document.write("Score of " + studentNames[2] + " is " + studentScore[2] + ". Percentage:" + percentageT + "<br>");

document.write("<br>");
document.write("<br>");


// Answer No. 9 (a)

var colorName = ["Red", "Green", "Yellow"];

console.log(colorName)

// Answer No. 9 (b)

// var addColor = prompt ("What color you want to add");

colorName.push("Blue");
colorName.push("Pink");

colorName.unshift("Purple");

// I will solve this question no. 9 later 


// Answer No. 10 ()

var scoreOfStudent = [320, 230, 480, 120];

document.write("<b>" + "Score of Students: " + "</b>" + scoreOfStudent + "<br>");

scoreOfStudent.sort((a, b) => a - b);

document.write("<b>" + "Ordered Score of Students: " + "</b>" + scoreOfStudent + "<br>");

document.write("<br>");
document.write("<br>");


// Answer No. 11 ()

var citiesName = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar "];
document.write("<b>Cities list: </b>" + citiesName + "<br>" + "<br>");

var selectedCities = citiesName.slice(2, 5);

document.write("<b>Selected Cities: </b>" + selectedCities);

