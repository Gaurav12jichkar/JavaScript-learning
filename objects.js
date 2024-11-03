//object literal
const Mysum=Symbol("key1")
 const userjs= {
    name :"gaurav",
    "full name":"gaurav jichkar",
    [Mysum]:"mykey1",
    age:19,
    location:"jaypur",
    isloggined:"false",
    lasttimeloginday:['monday','saterday']
 }
 console.log(userjs.age)
 console.log(userjs['full name'])
 userjs.location="nagpur";
 //Object.freeze(userjs)//freez all elemrents
 
  userjs.greting = function () {
    console.log("heelo am function")
  }
  console.log(userjs.greting())
  console.log(userjs)