//if
if(2>3) {
    console.log("This will always run");
}else {
   // console.log("This will never run");
}

//short hand notation for if else
 //if(2<3) console.log("This will always run");


 //switch case
 /*
 const day = 3;
 switch(day) {
     case 0:
         console.log("Sunday");
         break;
     case 1:
         console.log("Monday");
         break;
     case 2:
         console.log("Tuesday");
         break;
     case 3:
         console.log("Wednesday");
         break;
     case 4:
         console.log("Thursday");
         break;
     case 5:
         console.log("Friday");
         break;
     case 6:
         console.log("Saturday");
         break;
     default:
         console.log("Invalid day");
 }
         */

 //falsy values
 // false,0,-0,BigInt, 0n,"",null,undefined

 // truthy values
 // "0", "false", [], {}, function(){}, new Date(), Infinity, -Infinity," ", "0n", Symbol(), true, 1, -1, BigInt(1), BigInt(-1)

    // ternary operator
const age = 18;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
//console.log(canVote); // Output: You can vote

// nullish coalescing operator
const user = {
    name: "John",
    age: 30,
    address: null
};
const userAddress = user.address ?? "Address not provided";
//console.log(userAddress); // Output: Address not provided


let c= 5;
const i = () => {
    c++;
    console.log(`Count: ${c}`);
};

i(); // Output: Count: 6
i(); // Output: Count: 7
i(); // Output: Count: 8