//  myObject={
//     js:"javscript",
//     cpp:"c++",
//     rb:"rubby",
//     swift:"swift by apple"
//  }
//   for (const key in myObject) {
//     console.log(` ${myObject[key]}`)//{value of object will get printed}
//   }
//   for (const key in myObject) {
//     console.log(`${key} keys of this values ${myObject[key]}`)//{key,value of object will get printed}
//   }

const map=new Map()
map.set("in","india");
map.set("usa","unied state of america")
map.set("fr","france")
map.set("in","india")

for (const key in map) {
   console.log(`${key}`);
}//no out put