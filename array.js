//  const myarr=[0,1,2,3]
//  const myhero=['shaki','iron']
//  const arr2=new Array(111,222,333,444)
//  console.log(arr2[3])//444
//  //Array methods

//  myarr.push(9)
//  myarr.pop()
//  myarr.unshift(9)//front pe lagega[ 9, 0, 1, 2, 3 ]
//  myarr.shift()//remove from front
// console.log(myarr.includes(2))//true
 //console.log(myarr.indexOf(2))//2
 //const lengtharr=myarr.length
//  const newarr=myarr.join()
//  console.log(newarr)//convert to string
//  console.log(typeof newarr)//string

//  console.log(myarr)

//***********************slice and splice */
// console.log("A",myarr)
// const my=myarr.slice(1,3)//1,2
// console.log(myarr.splice(1,3))//1,2,3


/////////part 2

const marvel_hero=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
//marvel_hero.push(dc_heroes)   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_hero[3][1])//flash

//console.log(marvel_hero)
//const all_heroes=marvel_hero.concat(dc_heroes)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
all_heroes=[...marvel_hero,...dc_heroes] //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//console.log(all_heroes)
const array1=[1,2,3,4,[5,6,5,4],[7,89,0,4,5,78,4,5],[3,7,923,]]
//console.log(array1.flat(Infinity))


//console.log(Array.isArray("gaurav"))//false
//console.log(Array.isArray([2,3,45]))//true
console.log(Array.from("gaurav"))//[ 'g', 'a', 'u', 'r', 'a', 'v' ]
console.log(Array.from({name:"gaurav"}))//[]

let score1=345;
let score2=400;
let score3=500;
console.log(Array.of(score1,score2,score3))//[ 345, 400, 500 ]