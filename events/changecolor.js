const generatecolor= function(){
const hex= "0123456789ABCDEF"
let color='#'
for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random() *16)]
}
return color;
 
};
console.log(generatecolor());
let changecolor;
const startChangingColor = function(){
     
   if(!changecolor){
     changecolor = setInterval(changeBgcolor,1000)
   }

     function changeBgcolor(){
        document.body.style.backgroundColor=generatecolor()
     }
}
const StopChangingColor = function(){
    clearInterval(changecolor,1000)
    changecolor = null;
}

document.querySelector("#Start").addEventListener('click',
      startChangingColor
    );


document.querySelector('#stop').addEventListener('click',
    StopChangingColor
);
