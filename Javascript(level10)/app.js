//for creating event to multiplebuttons

// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     // btn.onclick = SayHello;
//     btn.addEventListener("click",SayHello);          //assEventListner
//     btn.addEventListener("click",SayName);
//     btn.addEventListener("dblclick",SayHello);
// }

// function SayHello(){
//     console.log("clicked.");
// }
// function SayName(){
//     console.log("Namaste");
// }

// for creating event to single button

// let btn = document.querySelector("button");
// btn.onmouseenter = function(){
//     console.log("click");
// }


let inp = document.querySelector("input");
let p =document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText = inp.value;
})