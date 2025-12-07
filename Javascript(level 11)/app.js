//  function one() {
//     return 1;
//  }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// //------------------------------------------------------
// setTimeout(() => {
//     console.log("hello");
// },2000);
// setTimeout(() => {
//     console.log("from Apna College !");
// },2000);
// console.log("HI");

// h1 = document.querySelector("h1");
// setTimeout(() => {
//     h1.style.color = "red";
// },4000);

// //------------------------------------------------------
h1 = document.querySelector("h1");

function changeColor(color,delay){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    })
    setTimeout(()=>{
        h1.style.color = color;
        if (nextColorchange) ;
    },delay)
}
changeColor("red",2000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
}).then(()=>{
    console.log("orange color was changed");
    return changeColor("yellow",500);
}).then(()=>{
    console.log("yellow color changed")
}).catch(()=>{
    consolr.log(error);
})

//callback nesting ---> callback hell  

// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }
// savetoDb("apna college",
//     ()=>{
//     console.log("success : your data was saved ");
//     savetoDb("hello World",
        
//         ()=>{
//         console.log("success2 : data2 saved");
//         savetoDb("shradha",
//             ()=> {
//                 console.log("success3 : data3 saved");
//             },
//             ()=>{
//                 console.log("failure3 : weak connection");
//             }
//         );
//     },
// )
//     }
// );
//         ()=>{
//             console.log("failure2 : weak connection")
//         }
    
//     ()=>{
//         console.log("failure : weak connection,data not saved");
//     }

// resolve and reject

function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4){
            resolve("Success : Data was saved.");           //result value
        }else{
            reject("Failue : Weak Connection.");            //error value
        }
    });
}

// then() and catch()

// let request = savetoDb("Apna College") //request promise object
// request.then(()=>{
//     console.log("request was fullfilled.");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("request was rejected");
//     console.log(request);
// })


// Promisise chaining

// savetoDb("Atharva")
// .then(()=>{
//     console.log("data1 saved.");
//     return savetoDb("Apna College");
// })
// .then(()=>{
//     console.log("data2 saved.");
//     return savetoDb("PCCOER");
// })
// .then(()=>{
//     console.log("data3 saved.");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })

// Results and Errors in Promises

savetoDb("Atharva")
.then((result)=>{
    console.log("data1 saved.");
    console.log("result of promise :",result)
    return savetoDb("Apna College");
})
.then((result)=>{
    console.log("data2 saved.");
    console.log("result of promise :",result)
    return savetoDb("PCCOER");
})
.then((result)=>{
    console.log("data3 saved.");
    console.log("result of promise :",result)
})
.catch((error)=>{
    console.log("Error !");
    console.log(error)
})