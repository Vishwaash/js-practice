//dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());

let mycreatedDate = new Date(2023,0,23,5,3)
//console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getDay());

//string interpolation 
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
    
})