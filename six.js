// const MyNum=[1,2,3,4,5,6,7]
// const number=MyNum.filter((num)=>{
//     return num >=4}
// )
// //console.log(number)
//  let conum=[]
// MyNum.forEach((num)=>{
//   if (num>4) {
//     conum.push(num)
//   } 
// })
// console.log(conum)

const books=[{tittle:'books one',genre:"friction,publish:1234",edition:2005},
    {tittle:'books 2',genre:"histor",publish:4,edition:2002},
    {tittle:'books 3',genre:"aloo",publish:134,edition:2003},
    {tittle:'books 4',genre:"fjjj",publish:8,edition:2005},]
    let user=books.filter((bk)=>bk.genre==="histor")
    console.log(user)