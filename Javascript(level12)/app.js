//  async function greet() {
   
//    return "Data 3131297320312@?2933@!2=!@`3";
//    throw "404 page not found";
//  } 
//  greet().then((result)=>{
//    console.log("promise was resolved.",result)
//  }).catch((error)=>{
//    console.log("promise was rejected with error : ",error);
//  })



//  function getnum(){
//    return new Promise((resolve,reject) =>{
//       setTimeout(()=>{
//          let num = Math.floor(Math.random() * 10)+1;
//          console.log(num);
//          resolve();
//       },1000)
//    });
//  }
// async function demo1() {
//    await getnum();   
//    await getnum();
//    await getnum();
// }

// h1 = document.querySelector("h1");
// function changeColor(color,delay) {
//    return new Promise ((resolve,reject) =>{
//       setTimeout(()=>{
//          let num = Math.floor(Math.random()*5)+1;
//          if (num > 3){
//             reject("promise rejected");
//          }

//          h1.style.color = color;
//          console.log("color changed to ",color);
//          resolve("color changed");
//       },delay);
//    });
// }
// async function demo2() {
//   try{
//    await changeColor("red",1000);
//    await changeColor("blue",1000);
//    await changeColor("green",1000);
//   }
//   catch(error){
//    console.log(error)
//    } 
//    let a = prompt("Enter num ");
//    console.log(a);
// }


//[Converting Json Data --> Js Object]

// let jsonRes = '{"name": "Atharva", "age": 21, "isStudent": true}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);


//[Converting Js Object --> Json Data]

// let car = {
//    name: "BMW",
//    price: 5000000,
//    color: "black",
//    available: true,
// }
// let carJson = JSON.stringify(car);
// console.log(carJson);


// let url ="https://api.potterdb.com/v1/movies/7df13fa9-3197-467f-8b85-fdabf5e9a9fe";
// fetch(url)                        // Fetching data from the url
//   .then(response => response.json())   // Convert raw response to JSON
//   .then(data => console.log(data))     // Print the data
//   .catch(error => console.error(error));

// //Our First Request Using Async Await
//  function getFacts(){
//    let response =  fetch(url);
//    let data = response.json();
//    console.log(data);
// }