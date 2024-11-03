// function sayhi(){
//     console.log("h");
//     console.log("e")
//     console.log("l")
//     console.log("l")
//     console.log("o")
// }
// sayhi()

// function addTwoNumber(num1,num2) {
//     console.log(num1+num2)
// }
// addTwoNumber(3,4)

// function addTwoNumber(num1,num2) {
//     let result=num1+num2
//     return result
// }
// console.log(addTwoNumber(3,4))

// function loginuserMessage(username)
// {
//     if(!username){
//         console.log("plese enter a user name")
//         return
//     }
// console.log(`${username} just loggin in`)
// }
// loginuserMessage("aalu")
// function loginuserMessage(username="sam")
// {
//     if(!username){
//         console.log("plese enter a user name")
//         return
//     }
// console.log(`${username} just loggin in`)
// }
// loginuserMessage()

// function calcalte(...num1){
//  return num1
// }
// console.log(calcalte(2 ,3,4,5,6))

const user={
    username:"gaurav",
    prices:234

}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username}and prices is ${anyobject.prices}`)
}
handleobject(user)