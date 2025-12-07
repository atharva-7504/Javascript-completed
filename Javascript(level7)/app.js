// // this in global scope
// console.log(this);


// // this in function() 
// function c() {
//     console.log(this);
// }
// c();

// const student1 = {
//     name:"Atharva",
//     printName : function(){
//         console.log(this);
//     }
// }
// student1.printName();

// const student2 = {
//     n:"Ridhima",
// }

// student1.printName.call(student2);

// // this inside arrow function
// const obj = {
//     a : 10,
//     x : function() {
//             const y = () => {
//                 console.log(this);
//             };
//             y();
//     }
// }
// obj.x();

// const student = function(){
//     var name="A";
//     var age=18;
//     var math=78;
//     var eng=90;
//     var phy=80;
//     function getAvg(math,eng,phy ){
//         let avg = (math + eng + phy)/3;
//         console.log(avg);
//     }
// }
// console.log(student);



// Set Timeout
// console.log("Hi..");

// setTimeout(()=>{console.log("End")},4000);

// console.log("Welcome to Apa College.");


//SetInterval
// console.log("Hi!");
// let id = setInterval(() => {
//     console.log("End");
// },2000);
// console.log(id);
// clearInterval(id);
// console.log("Welcome");






// const student = {          // for student object this keyword
//                            // is the global obj
//     name:"Atharva",
//     marks:90,
//     roll_no:42,
//     prop:this, // global scope

//     getName:function (){    //for getName function this keyword 
//                             // is the calling object student
//         console.log(this);
//         return this.name; 
//     },
//     getMarks: () => {       // for getMarks arrow function this keyword
//                             // is the parent of the calling function
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(() => {
//             console.log(this);
//         },2000);
//     },
//     getInfo2:function(){
//         setTimeout(function (){
//             console.log(this);
//         },2000);
//     }
// };


//Closing the interval

// let id = setInterval(()=>{
//     console.log("Hello World");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },12000);




// let arr = [89,78,88,90,96];
// console.log(arr);
// let arrayAverage = (arr) => {
//     let sum = 0;
//     for (let i=0; i<arr.length; i++){
//         sum += arr[i];
//         console.log(sum);
//     };
//     console.log(sum/5);

// };
// console.log(arrayAverage);

// let n = prompt("Enter a number :");
// let isEven = () => {
//     if (n % 2 == 0){
//         console.log(`${n} is even.`);
//     }else {
//         console.log(`${n} is odd.`)
//     };
// }
// console.log(isEven(n));


const obj = {
    message : "HEllo,World !",

    logMessage(){
        console.log(this.message);
    }
};
setTimeout(obj.logMessage,2000);


let length = 4;
function callBack() {
    console.log(this.length);
}
const onject = {
    length:5,
    method(callBack) {
        callBack();
    },
}