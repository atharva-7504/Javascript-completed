let inp = document.querySelector("input");
let h1 = document.querySelector("h1");
inp.addEventListener("input",function(){
    h1.innerText = inp.value;
})
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
})
