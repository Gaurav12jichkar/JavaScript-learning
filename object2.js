//consructor method
//const instagramuser= new object
const instagramuser={}
 instagramuser.id=234;
 instagramuser.name="sammy";
 instagramuser.isloggesin= false;
 //console.log(instagramuser)

 //console.log(Object.keys(instagramuser))
 //console.log(Object.values(instagramuser))
 //console.log(Object.entries(instagramuser))
 //console.log(Object.assign(instagramuser))//{ id: 234, name: 'sammy', isloggesin: false }
 //[ 'id', 'name', 'isloggesin' ]
//[ 234, 'sammy', false ]
//[ [ 'id', 234 ], [ 'name', 'sammy' ], [ 'isloggesin', false ] ]

const cource={
    courcename:"js in hindi",
    price:"999",
    courceInsturctor:"hitesh"
}
const {courceInsturctor:insturctor}=cource
console.log(insturctor)