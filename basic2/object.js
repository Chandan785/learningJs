//singlton

// object literal

const symbol= Symbol("uniqueIdentifier"); // Creating a unique symbol


const person = {
    [symbol]: "This is a unique symbol",
    name: "chandan",
    email:"chk@gmail.com",
    age: 30,
     islogin: true,
    
};
console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.${person.islogin ? " I am logged in." : " I am not logged in."} 
${typeof person[symbol]}`);


 person.email = "rkc@gmail.com"; // Updating the email property
 console.log(`My updated email is ${person.email}.`);
 

 //Object.freeze(person); // Freezing the object to prevent further modifications
 person.age = 31; // This will not change the age property due to freezing
 console.log(`My age is still ${person.age} after freezing the object.`);

 person.greeting = function() { // Adding a new method to the object
    return `Hello, my name is ${person.name}.`;
    }

    console.log(person.greeting()); // Calling the new method
    console.log(person.greeting)
