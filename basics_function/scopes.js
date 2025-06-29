let a= 45;
const b = 50;
//var c= 300; // Function-scoped variable, accessible outside the block
let c = 60;

 if (true) {
    let a = 100; // Block-scoped variable, only accessible within this block
    const b = 200; // Block-scoped constant, only accessible within this block
    var d = 300; // Function-scoped variable, accessible outside the block
    console.log(`Inside block: a = ${a}, b = ${b}, d = ${d} `); // Outputs: a = 100, b = 200, c = 300
}




console.log(`Outside block: a = ${a}, b = ${b}, c = ${c}`); // Outputs: a = 45, b = 50, c = 300