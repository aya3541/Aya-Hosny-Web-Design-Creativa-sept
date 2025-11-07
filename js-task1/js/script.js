
var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var age = prompt("Please enter your age");
var myJob = prompt("Please enter your job");

console.log(
    "Welcome " + firstName + "\n" +
    "Your full name is: " + firstName + " " + lastName + "\n" +
    "Your age is: " + age + "\n" +
    "And your job is: " + myJob
);

if (myJob.toLowerCase() === "eng") {
    console.log("Valid job");
} else {
    console.log("Invalid job");
}

if (typeof firstName === "string" && typeof lastName === "string" && !isNaN(Number(age))) {
    console.log("Data types are valid");
} else {
    console.log("Data types are invalid");
}










