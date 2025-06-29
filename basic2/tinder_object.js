const tinder={}
tinder.name = "Tinder";
tinder.age = 10;
tinder.isActive = true;
tinder.location = {
    city: "San Francisco",
    state: "California"
};
tinder.likes = ["Hiking", "Traveling", "Cooking"];
tinder.greet = function() {
    return `Hello, my name is ${tinder.name} and I am ${tinder.age} years old.`;
}

//console.log(tinder.greet());
//console.log(tinder);


// Adding a new property
const newuser={
    name :"John",
    age : 25,

fullname:{
    userfullName: {
         firstName: "chandan",
        lastName: "kumar"
    }  
}
}


//console.log(newuser.fullname.userfullName.firstName); // Accessing nested property
//console.log(newuser.fullname.userfullName.lastName); // Accessing nested property


const object1 = {
    name: "Object1",
    age: 5,
    isActive: true,
}
const object2 = {
    name: "Object 2",
    age: 10,
    isActive: false,
}

//console.log({object1, object2}); // Using object literal notation to create an object with two properties

//const object3 = Object.assign({}, object1, object2); // Merging two objects into a new object

const object3 = {...object1, ...object2}; // Using spread operator to merge two objects
/*
console.log(object3);

console.log(object3.name); // Accessing a property of the merged object
console.log(object3.age); // Accessing a property of the merged object
console.log(Object.keys(tinder));  // Getting the keys of the tinder object
console.log(Object.values(tinder)); // Getting the values of the tinder object

console.log(tinder.hasOwnProperty("name")); // Checking if the tinder object has a property named "name"

*/
// Example of an object with methods and properties
const course ={
    name: "JavaScript Basics",
    duration: "4 weeks",
    isActive: true,
    topics: ["Variables", "Functions", "Objects", "Arrays"],
    getDetails: function() {
       // return `Course Name: ${this.name}, Duration: ${this.duration}`;
        return `Course Name: ${course.name}, Duration: ${course.duration}`;
    }
}

const {getDetails:details} = course; // Destructuring to get the getDetails method
console.log(details()); // Calling the destructured method

console.log(course.getDetails()); // Calling the method to get course details