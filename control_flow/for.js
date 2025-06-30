//for of

const array = [1, 2, 3, 4, 5];
for (const value of array) {
 //   console.log(value); // Output: 1, 2, 3, 4, 5
}

// for in
const user = {
    name: "John",
    age: 30,
    city: "New York"
};

const greetings ="hello";
 for(const greet of greetings){
  //  console.log(greet); // Output: h, e, l, l, o
 }
 
// Using for...in to iterate over object properties
for (const key in user) {
    //console.log(`${key}: ${user[key]}`);
    // Output: name: John, age: 30, city: New York
}


const map= new Map;
map.set("name", "John");
map.set("age", 30); 
map.set("city", "New York");
for (const [key, value] of map) {
   // console.log(`${key}: ${value}`);
    // Output: name: John, age: 30, city: New York
}   


 const myobj={
    name: "John",
    age: 30,
    city: "New York"
 }

 for(const key in myobj){
//    console.log(`${key}:--value is ${myobj[key]}`)
 }
 

 //for each

    const numbers = [1, 2, 3, 4, 5];
    // numbers.forEach(function (val){
    //   console.log(val); // Output: 1, 2, 3, 4, 5
    // })

    // using arrow function
    numbers.forEach((val) => {
        //console.log(val); // Output: 1, 2, 3, 4, 5
    });

 numbers.forEach((val, index,arr) => {
  //  console.log(`Index: ${index}, Value: ${val},array: ${arr} `);
 })



 // Using forEach with an object
 const userObj = 
    [{
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 35,
        city: "Chicago"
    },
    {
        name: "Alice",
        age: 28,
        city: "San Francisco"
    }];

userObj.forEach((user, index) => {
    console.log(`users name is ${user.name} , Users age is ${user.age}`)
}
)
 