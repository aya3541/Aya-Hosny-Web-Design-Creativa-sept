

var degree = Number(prompt("please enter your degree"));

if (degree < 50  && degree >= 1 ) {
    console.log("you are failed");
}

else if (degree ===0 ) {
    console.log(" not valid");
}
else if (degree ===null ) {
    console.log(" not valid null");
}
else if (degree >= 50 && degree < 60) {
    console.log("you are acceptable");
}
else if (degree >= 60 && degree < 70) {
    console.log("you are successful");
}
else if (degree >= 70 && degree < 80) {
    console.log("you are good");
}
else if (degree >= 80 && degree < 90) {
    console.log("you are very good");
}
else if (degree >= 90 && degree <= 100) {
    console.log("excellent");
}
else {
    console.log("invalid number");
}







