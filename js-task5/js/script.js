
var numberOfusers = () => {
    var numberuser = prompt("please enter your number of user");
    
    for (var i = 0; i < numberuser; i++) {
        addUser()

    }
}
var userarray = []
var addUser = () => {
    var username = prompt("please enter your name");
    var userid = prompt("please enter your id");
    var userbalance = prompt("please enter your balance");


    if (username != null||username != "" && userid != null|| userid != ""&& userbalance != null||userbalance != "" ) {
        var userobj = {
            name: username,
            id: userid,
            balance: userbalance
        };
        userarray.push(userobj);
        
    }
    else{
        console.log("please enter again")
    }
}
console.table(userarray)
numberOfusers()

var editUserBalanceBy = () => {
    var idbalance = prompt("please enter your id");
    var newbalance = prompt("please enter your newbalance");

    var findid = userarray.findIndex(items => items.id == idbalance);

    userarray[findid].balance=newbalance ;
    
    console.log(editUserBalanceBy)


}
editUserBalanceBy()

var deletUser= () =>{
    var deleteid = prompt("please enter delete id");
    var findid = userarray.findIndex(items => items.id == deleteid);

    userarray.splice(findid,1);
    
    console.table(userarray)
    
}
deletUser()