const arr= [1, 2, 3, 4, 5];
const multinum=arr.map((num)=> ( num * 2
));
//console.log(multinum); // Output: [2, 4, 6, 8, 10]


//chainnig

const chaingmpp= arr.map((num)=> ( num * 2
))
.map((num)=>(num+10))
.reduce((acc, num) => acc + num, 0);
//console.log(`accumulator value is ${acc}, num is ${num}`); // Output: 60

console.log(chaingmpp); 
