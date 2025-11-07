


var language = prompt("please enter your  language");
    lan = ["html" ,"css" ,"python"]

var x = ()=> {
    // if(language == undefined ){
    //     console.log("please enter  language");
    // }
    if (!language) {
        console.log("please enter language");
    }
    
    else if (lan.includes(language.toLowerCase())) {
        console.log("thanks");
    }
    else {
        lan.push(language.toLowerCase());
        console.log("language added successfully:", lan);
    }
}
x();

