//(iife) immediately invoked function expression

//by using we can create a function that is executed immediately
// this is safe from the global scope 

(function() {
    console.log("connected to database")
})(); 
// Output: connected to database

(function(database) {
    console.log(`connected to database ${database}`);
})('mongoDB');