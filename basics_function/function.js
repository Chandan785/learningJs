function myfriend() {
    console.log("Hello, I am a friend of Chandan.");
    name: "Chandan";
    age: 30;
    isActive: true;
 
}
//myfriend(); // Calling the function to execute it


/*
function addtwoNumbers(a, b) {//parameters
    console.log(a+b);  // Function to add two numbers and print the result
}

addtwoNumbers(5, 10); // Calling the function with arguments 5 and 10

*/
function addtwoNumbers(a, b) {//parameters
    return a + b;  // Function to add two numbers and return the result
}

let result = addtwoNumbers(5, 10); // Calling the function with arguments 5 and 10
//console.log(result); // Printing the result of the addition


function loginuser(username, password) 
{

    if(!username||!password) { // Check if either username or password is empty
        return "Username and password are required!";
    }
 
    else if(username.length < 5) { // Check if username is less than 5 characters
        return "Username must be at least 5 characters long!";
    }
    else if(password.length < 8) { // Check if password is less than 8
        return "Password must be at least 8 characters long!";
    }
    else if(!/^[a-zA-Z0-9]+$/.test(username)) { // Check if username contains only alphanumeric characters
        return "Username can only contain alphanumeric characters!";
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) { // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
        return "Password must contain at least one uppercase letter, one lowercase letter, and one digit!";
    
    // Function to check login credentials
    if (username === "chandan" && password === "1234454545") {
        return "Login successful!";
    } 
    else {
        return "Login failed!";
    }
}
}
//let loginResult = loginuser("chandan", "124"); // Calling the function with username and password
//console.log(loginResult); // Printing the result of the login attempt
console.log(loginuser("chandan", "1234454545")); // Calling the function with correct credentials
//console.log(loginuser("chandan", "12345")); // Calling the function with incorrect credentials

























 
function addtocart(val1,val2,...num1){
    return `Item with ID ${num1} added to cart successfully!;` // Function to add an item to the cart
}

let cartResult = addtocart(5,50,45); // Calling the function to add an item to the cart
//console.log(cartResult); // Printing the result of adding an item to the cart


const user={
    name: "Chandan",
    age: 30,
    isActive: true,
    greet: function() { // Method to greet the user
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

function displayUserInfo(anyuser) {
    return user.greet(); // Function to display user information by calling the greet method
}

let userInfo = displayUserInfo(user); // Calling the function to get user information
//console.log(userInfo); // Printing the user information


const myArray = [1, 2, 3, 4, 5];


function newarray1(newarray){
    return newarray[0]
}

//console.log(newarray1(myArray)); // Calling the function to get the first element of the array   