let arr = [7,9,0,-2];
console.log(arr);
let n = prompt("Enter n : ");
// console.log(arr.slice(0,n));
console.log(arr.reverse().slice(0,n).reverse());

let str = prompt("Enter a string :");
if (str.length == 0){
    console.log("Empty");
}else{
    console.log("not empty");
}
