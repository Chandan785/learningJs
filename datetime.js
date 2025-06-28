let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
//console.log(mydate.toISOString());
console.log(mydate.toLocaleString());

console.log(typeof(mydate));

// console.log(mydate.getFullYear());
// console.log(mydate.getMonth()); 
// console.log(mydate.getDate());
let mydate2 = new Date(2023, 9, 1, 12, 0, 0);
console.log(mydate2.toString());
let date = new Date("2023-10-01");
console.log(date.toLocaleString()); 

let timeStmap = Date.now();
console.log(timeStmap);