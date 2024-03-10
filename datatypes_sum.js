// 1) Primitive Datatypes
// 7 categories 
// call by value a) String b) Number c)Boolean d) Null e) undefined 
//f)Bigint g)Symbol

//2) reference/non primitive
//a)arrays b) objects c)functions

// javascrit is dynamically typed
//javascript is cousin brother of typescript


const heroes = ["shaktiman", "nagaraj", "doga"]
let myObj = {
    name:"Vishwas",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}
console.log(typeof myFunction)

//**************memory**************
//primitve => stack
//non primitive => heaps

//let myyoutubename = "hiteshchoudary.com"
//let anothername = myyoutubename;
//anothername = "chaiaurcode";
//console.log(myyoutubename);
//console.log(anothername);

//let userOne = {
//    email:"user@google.com",
//    upi: "user@ybl"
//}
//let userTwo = userOne;
//userTwo.email = "vishwas@google.com";

//console.log(userOne.email);
//console.log(userTwo.email);