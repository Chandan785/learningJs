let a= 45;
const b = 50;
//var c= 300; // Function-scoped variable, accessible outside the block
let c = 60;

 if (true) {
    let a = 100; // Block-scoped variable, only accessible within this block
    const b = 200; // Block-scoped constant, only accessible within this block
    var d = 300; // Function-scoped variable, accessible outside the block
   // console.log(`Inside block: a = ${a}, b = ${b}, d = ${d} `); // Outputs: a = 100, b = 200, c = 300
}


//console.log(`Outside block: a = ${a}, b = ${b}, c = ${c}`); // Outputs: a = 45, b = 50, c = 300

function testScope() {
usernaem = "JohnDoe"; // Function-scoped variable
 passward = "12345"; // Function-scoped variable
 function test(){
    const website = "example.com"; // Block-scoped variable
    console.log(`Username: ${usernaem}, Password: ${passward}`); // Outputs: Username: JohnDoe, Password: 12345
     
 }
   // console.log(`Website: ${website}`); // Outputs: Website: example.com
    test();
    
}

testScope(); // Call the function to see the output
console.log(add(5)); // Outputs: 6
function add(num){
    return num+1
}


//console.log(add2(5)); // Outputs: ReferenceError: Cannot access 'add2' before initialization
// console.log(add2(5)); // Outputs: 7
const add2 = function(num){
    return num+2
}

console.log(add2(5)); // Outputs: 8
