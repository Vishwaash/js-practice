//singleton=>if made through constructor
//object.create => made through constructor
//not singleton=> if made through literal

const mySym = Symbol("key1");
const JsUser = {
       name: "Vishwas",
       age: 20,
       [mySym]: "mykey1",
       location: "Dehradun",
       email: "Vishwas@google.com",
       isloggedin: false,
       lastloginday: ["monday", "saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);
//Object.freeze(JsUser);
JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello jsuser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());