console.log("This output is from the external JS file");
console.log("Name: Bryan");
console.log("School: CPCC");
console.log("Grade: Freshman");

var name = "Bryan";
let school = "CPCC";
var grade = "Freshman";

document.getElementById("name").innerHTML = "Name: <b>" + name + "</b>";
document.getElementById("grade").innerHTML = "Grade: <b>" + grade + "</b>";
document.getElementById("school").innerHTML = "School: <b>" + school + "</b>";
