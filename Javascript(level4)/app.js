// for (let i = 1 ; i<=15; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
// let n = prompt("Enter number :");
// console.log("=====Multiplication table of " +n +"=====");
// for (let i=1 ; i<=10 ; i++){
//     console.log(`${n} X ${i} = ${n*i}`);
// }


// let fav = "PK";
// let guess = prompt("Enter fav movie name :");
// while((guess!=fav) && (guess !="quit")){
//     console.log("wrong guess");
// }
// if (guess == fav){
//     console.log("correct");
// }else{
//     console.log("you quit.");
// }

// let hero = ["c","python","cpp","html"];
// for (let i = 0 ; i < hero.length ; i++){
//     console.log(i, hero[i]);
// }

// let lang = [["html","css","js","mern"],["cpp","java","python"]];
// for (let i=0 ; i<lang.length ; i++){
//     console.log(i,lang[i]);
//     for (let j=0 ; j < lang[i].length ; j++){
//         console.log(i,j,lang[i][j]);
//     }
// }

// let array = [[1,2,3],[4,6,3,2]];
// for(block of array){
//     for(subarray of block){
//         console.log(subarray);
//     }
// }


// To Do list 

// let todo = [];
// let req = prompt("Please Enter yout request :");
// while(true){

//     if (req == "quit"){
//         console.log("quiting from todo list.");
//         break;
//     }

//     if (req == "list"){
//         console.log("================");
//         for (let i=0 ; i<todo.length ; i++){
//             console.log(i,todo[i]);
//         }
//         console.log("=================");
//     }
//     else if (req == "add"){
//         let task = prompt("Enter the task to be added :");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if (req == "delete"){
//         let idx = prompt("Enter the task index:");
//         todo.splice(idx,1);
//         console.log("task delete");
//     }
    
//     req = prompt("Please Enter yout request :");
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt("Enter num to be deleted:");
// for (let i=0; i<arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let number = 287152;
// let sum = 0;
// for(let i=0 ; i<number.length ; i++){
//     sum += number[i];
// }
// console.log(sum);

// let arr = [2,5,3,4,7,5,9];
// let largest = 0;
// for(let i=0 ; i <= arr.length ; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);
