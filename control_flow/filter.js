const nums=[1,2,3,4,5,6,7,8,9,10];
// filter method
const evenNums = nums.filter((num) => num % 2 === 0);
//console.log(evenNums); // Output: [2, 4, 6, 8, 10]

// filter method with arrow function
const oddNums = nums.filter(num => {
   return num % 2 !== 0
});
//console.log(oddNums); // Output: [1, 3, 5, 7, 9]
const newnum = [];
nums.forEach((num)=>{
    if(num<5){
        //console.log(num); // Output: 6, 7, 8, 9, 10
        newnum.push(num);
    }
    
})
//console.log(newnum); // Output: [1, 2, 3, 4]
 
const books=[{
    title: "JavaScript Basics",
    generation: "Programming",
    published: 2020,edition: 1
}, {
    title: "Advanced JavaScript",
    generation: "Programming",
    published: 2021,edition: 2
}, {
    title: "JavaScript Design Patterns",
    generation: "Programming",
    published: 2019,edition: 3
}, {
    title: "JavaScript for Beginners",
    generation: "Programming",
    published: 2022,edition: 4
}, {
    title: "JavaScript in Depth",
    generation: "Programming",
    published: 2023,edition: 5
}, {
    title: "JavaScript Frameworks",
    generation: "Programming",
    published: 2024,edition: 6
}, {
    title: "JavaScript Testing",
    generation: "Programming",
    published: 2025,edition: 7
}, {
    title: "JavaScript Performance",
    generation: "Programming",
    published: 2026,edition: 8
}, {
    title: "JavaScript Security",
    generation: "Programming",
    published: 2027,edition: 9
}, {
    title: "JavaScript Best Practices",
    generation: "Programming",
    published: 2028,edition: 10
}, {
    title: "JavaScript for Web Development",
    generation: "Programming",
    published: 2029,edition: 11
}, {
    title: "JavaScript for Mobile Development",
    generation: "Programming",
    published: 2030,edition: 12
}, {
    title: "JavaScript for Game Development",
    generation: "Programming",
    published: 2031,edition: 13
}, {
    title: "JavaScript for Data Science",
    generation: "Programming",
    published: 2032,edition: 14
}, {
    title: "JavaScript for Machine Learning",
    generation: "Programming",
    published: 2033,edition: 15
}
];

const userbooks= books.filter((book) => {
    return book.published > 2025  
});
console.log(userbooks)
