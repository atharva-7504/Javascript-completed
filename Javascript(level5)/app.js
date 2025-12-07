// const post = {
//     username : "@atharva_7504",
//     content : "Vlogging / Gaming",
//     likes : 69,
//     reposts : "no",
//     tags : ["#trending","#shorts"] ,
// }
// console.log(post);
// console.log(post["username"]);
// console.log(post.username);
// post.username = "@atharva__7504";
// console.log(post.username);

// const student = {
//     name:"shradha",
//     age : 23,
//     marks:94.4,
//     city:"Delhi"
// }
// console.log(student);
// student["city"] = "Mumbai";
// student.gender = "Female";
// student["marks"] = 'A';
// console.log(student);

// objects of objects

// const ClassInfo = {
//     Aman: {
//         div : "A",
//         roll_no : 40,
//     },
//     Atharva: {
//         div : "C",
//         roll_no : 37,
//     },

//     Naman: {
//         div : "B",
//         roll_no : 20,
//     },
// }
// console.log(ClassInfo);

// // array of objects

// const CarDetails = [
//     Toyota= {
//         model: "Fortuner 4x4",
//         color:"black",
//         cost:5000000,
//     },
//     Mercedes={
//         model: "G-Wagon",
//         color:"metal-grey",
//         cost:12300000,
//     },
//     Maruti={
//         model:"Swift",
//         color:"red",
//         cost:1400000,
//     }
// ]
// console.log(CarDetails);

// let random = Math.ceil(Math.random() * 100);
// console.log(random);
// let dice_roll = Math.floor(Math.random() * 6) + 1;
// console.log(dice_roll);

// const Car = {
//     name:"Toyota",
//     model:"Fortuner",
//     color:"black",
// }
// console.log(Car["name"]);

// const Person = {
//     name:"Atharva",
//     age:18,
//     city:"New York",
// }
// console.log(Person);
// Person.country = "United States",
// console.log(Person);

let num = prompt("Enter the max number :");
let random = Math.floor(Math.random() * num)+1;
let guess = prompt("Can you guess the number :");
while(true){
    if(guess =="quit"){
        console.log("Quit");
        break;
    }
    if (guess == random){
        console.log("Guess is correct." , guess);
        break;
    }else if(guess > random){
        console.log(`Guess = ${guess} is larger.`);
        guess = prompt("Guess again :");
    }
    else {
        console.log(`Guess = ${guess} is smaller.`);
        guess = prompt("Guess again :");
    }
}
console.log(random);