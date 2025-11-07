var userInfo = {
    firstName: "Zein",
    lastName: "Tamer",
    age: 20,
    address: "October",
    fullName: function () {
        return `${userInfo.firstName} ${this.lastName}`
    },
    testFun: () => {
        console.log(this)
        return `${userInfo.firstName} ${this.lastName}`
    },

    addresses: function () {
        return {
            homeAddress: "Nasr city",
            officeAddress: "October"
        }
    }

}
console.log(userInfo.fullName())
console.log(userInfo.testFun())
console.log(userInfo.addresses().homeAddress)



// console.log(userInfo.age)
// userInfo.isGraduated = false

// console.log(userInfo)