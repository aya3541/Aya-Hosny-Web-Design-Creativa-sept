

function looping(startNum, endNum, breakNum, contNum) {

    
    if(startNum == undefined || endNum == undefined || breakNum == undefined || contNum==undefined){
        console.log("please enter all number");

    }
    else{

        for (let i = startNum; i <= endNum; i++) {
            if (i === contNum) continue;
            else if (i === breakNum) break;
            console.log(i);
        }
    }

    
}

looping(1, 30, 20, 15);



