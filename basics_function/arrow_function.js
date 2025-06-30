const user={
    username: "rkc",
    age: 30,
    welcome: function() {
        console.log(`Welcome ${this.username} to javascript learning !`);
       // console.log(this)
    }
}

//user.welcome(); // Output: Welcome rkc!

//user.username = "chandan kumar";
//user.welcome(); // Output: Welcome chandan kumar!

//console.log(this)
/*
function chandan() {
    console.log(this);
}

chandan(); // Output: Window { ... } in browser or global object in Node.js
*/



//difference between function and arrow function 
/* in the function keyword this refers to the object that calls the function
   in the arrow function this refers to the parent scope of the function
    in the arrow function this is lexically bound

    i.e in the function we can use use this and the arrow function we can use this
*/

const addtwo =(num1, num2) => {
    return num1 + num2;
}
//console.log(addtwo(10, 20)); // Output: 30

// implicite return
/*
when we have only one expression in the arrow function we can use implicite return
in this case we don't need to use return keyword and curly braces
this is called implicite return
when we use {} then we need to use return keyword
when we use () then we don't need to use return keyword
*/


//const addthree = (num1, num2) => num1 + num2;

const addthree = (num1, num2) => ({username:"chandan kuamr"})

console.log(addthree(10, 20)); // Output: 30

  
 