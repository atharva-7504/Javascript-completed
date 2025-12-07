//Q1
let p1 = document.createElement("p");
p1.innerText="Hey I am para1";
p1.style.color = "red";
let body = document.querySelector("body");
body.append(p1);

//Q2
let h3 = document.createElement('h3');
h3.innerText="Hey i am blue.";
h3.style.color = "blue";
document.querySelector("body").append(h3);

//Q3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
div.innerText = "Div";
h1.innerText = "h1";
p.innerText = "para";
div.classList.add("box");
body.append(div)
div.append(h1);
div.append(p);


//Q4
let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click Me";
document.querySelector("body").insertAdjacentElement("afterend",btn);

input.setAttribute("placeholder","Enter Name :");
document.querySelector("body").append(input);

btn.setAttribute("id","button");

//Q5
btn.style.backgroundColor = "blue";
btn.style.color = "white";
console.log(document.querySelector("#button"));



