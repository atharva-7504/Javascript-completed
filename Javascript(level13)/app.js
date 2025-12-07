
let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getJokes(){
    try{
        let response = await axios.get(url);
        return (response.data.delivery + " " + response.data.setup);
    }catch(error){
        return (error);
    }
}
async function getImage(){
    try{
        let response = await axios.get(url2);
        return (response.data.message);
    }catch(error){
        console.log(error);
        return "Error";
    }
}


let btn = document.getElementById("joke");
btn.addEventListener("click",async ()=>{
    let joke = await getJokes();
    console.log(joke);
    let p = document.querySelector("p");
    p.innerText = joke;
})


let btn2 = document.getElementById("image");
btn2.addEventListener("click",async ()=>{
    let dogimage = await getImage();
    console.log(dogimage);
    let img = document.querySelector("img");
    img.src = dogimage;
    img.style.height = "200px";
    img.style.width = "200px";
})


//Headers with API request

const url3 = "https://icanhazdadjoke.com/";
async function getDadJokes(){
    try{
        const config = {headers:{Accept:"application/json"}}
        let response = await axios.get(url3,config);
        console.log(response.data);
      }catch(error){
        console.log(error);
      }
}





let btn3 = document.getElementById("search");

btn3.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    show(colleges);

});
function show(colleges){
    let list = document.getElementById("#list");
    for (col of colleges){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
let url4 = "http://universities.hipolabs.com/search?name=";
async function getColleges(country) {
    try{
        let res = await axios.get(url4 + country);
        return (res.data);
    }catch(error){
        console.log(error);
    }
}