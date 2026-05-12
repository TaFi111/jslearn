let fullName = "Nguyen Tan Tai";
let birthYear = 2007 ;

const today = new Date();
const currentYear = today.getFullYear();

let age = currentYear - birthYear;
let Student;
if (age <= 18) {
    isStudent = true;
}
else {
    isStudent = false;
}
console.log(`Full name: ${fullName}.`);
console.log (`Age: ${age}.`);
if (isStudent ===  true) {
    console.log(`Still student.`)
}
else {
    console.log(`No more student.`)
}