// function calculator(num1,num2){
//     input();
//     display();
//     console.log("Press 1 to add .");
//     add(num1,num2);
// }

// function input(){
//      num1 = prompt("Enter the number 1 :");
//      num2 = prompt("Enter the number 2 :");
// }
// function display(num1,num2){
//     console.log(`Number 1 : ${num1}`);
//     console.log(`Number 2 : ${num2}`);
// }
// function add(num1,num2){
//     let add= num1 + num2;
//     console.log(`Addition : ${add}`);
// }
// calculator();

// let num=6;
// let random;
// function RollDice() {
//     random=Math.floor(Math.random() * num) + 1;
//     console.log("Dice Rolled : ",random);
// }
// RollDice();

// function sum(n){
//     let sum = 0
//     for (let i = 1 ; i<=n ; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// let num = prompt("Enter number :");
// let s = sum(num);
// console.log(`Sum of no's from 1 to ${num} : ${s}`);


// let arr = ["Hi","Hello","Howareyou !"];
// function ConcatArr(arr){
//     let result = "";
//     for(let i=0; i < arr.length ; i++){
//         result += arr[i];
//     }
//     return result;
// }
// console.log(ConcatArr(arr))


// let sum=23;
// function calSum(a,b){
//     let sum;
//     sum = a+b;
//     console.log(sum);
// }
// calSum(2,6);
// console.log(sum);

// {
//     let a = 0;
//     console.log(a);

// }
// for (let i = 0; i<=4 ; i++){
//     console.log(i);
// }

// function outerfunction(){
//     function innerfunction(){
//         console.log(x,";",y);
//     }
//     innerfunction();
//     let x= 5;
//     let y = 3;
//     innerfunction();
// }
// outerfunction();








// Function working in js .

// let x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     let x = 10;
//     console.log(x);
// }
// function b() {
//     let x = 100;
//     console.log(x);
// }

// Function Expression

// let greet = function(){
//     console.log("How are you ?");
// }
// greet();

// Higher order functions

var add = function (num1,num2) {
    let sum = num1 + num2;
    console.log(sum);
}
var sub = function(num1,num2) {
    let substract = num1 - num2;
    console.log(substract);
}
function calc(n1,n2,operator){
    if (operator == add){
        add(n1,n2);
    }else if (operator == sub){
        sub(n1,n2);
    }
    else {
        console.log("wrong input operation");
    }
}
calc(100,50,sub);


// Assignment 1
// let arr = [];
// let arrinput = function(arr){
//     let size = prompt("Enter size of array :");
//     arr.length == size;
//     if(arr.length > 0){
//         for (let i=0; i<arr.length ; i++){ 
//            let elements = prompt("Enter elements to add inside array :");
//            arr.push(elements);
//         }
//     }else{
//         console.log("Add elements inside array:");
//         arrinput();
//     }
// }
// let num = prompt("Enter a number :");
// let arrElements = function(arr,num) {
//     for (let i=0 ; i<arr.length ; i++){
//         if(arr[i] < num){
//             arr.pop(i);
//         }else{
//             console.log(arr);
//         }
//     }
// }
// arrinput(arr);
// arrElements(arr,num);

console.log(a);
 a = 5;