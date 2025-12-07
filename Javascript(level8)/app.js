//forEach()

// let arr=[{
//     name:"Atharva",
//     branch:"comp",
//     marks : 92
// },
// {
//     name:"Krishna",
//     branch:"Entc",
//     marks:79,
// }]
// arr.forEach((i) => {
//     console.log(i);
// })


//map()

// let num = [1,2,3,4,5];
// let func = function (i) {
//     return i*2;
// }
// let newarr = num.map(func);
// console.log(newarr);

// let cgpa = arr.map((i) => {
//     return i.marks / 10;
// })
// console.log(cgpa);

//filter()

// let numbers = [29,45,32,43,12,34,56,76,55,56,89,78,99,75,43,21];
// let ans = numbers.map((i) => (i%2==0) );
// console.log(ans);
//  ans = numbers.filter((i) => (i%2==0) );
// console.log(ans);


//every()
// let arr1 = [2,4,6];
// let ans = arr1.every((i) => (i %2== 0));
// console.log(ans);

//some()

// let arr2 = [2,3,4,5,6,7,8];
// let ans2 = arr2.some((i)=>i%2==0);
// console.log(ans);

//reduce()

// let arr3 = [5,4,3,2,1];
// let final = arr3.reduce((res,i) => {
//     if (i > res){
//         return i;
//     }else{
//         return res;
//     }
// });
// console.log(final);

// practice question 

//Q1.
let array1 = [3,77,90,89,40,36,90,89];
let ans1 = array1.every((i) => {
    return i%10 == 0;
})
console.log(ans1);

//Q2.
let array2 = [237755,587533,7675222,664290,5386,6442558,5422,6541];
let ans2 = array2.reduce((min,i)=>{
    if (min > i){
        return i;
    }else {
        return min;
    }
});
console.log(ans2);



//Default parameters
function max (a,b=5){
    if(a>b){
        console.log(a ," > ", b);
    }else{
        console.log(b," > ",a);
    }
}

//spread (...)

let original = [34,75,44,34];
let copy = [...original];   //copying array
console.log(copy);

let a = [1,2,3,4,5];
let b = [4,5,6];
console.log([...a,...b]);   //combining arrays

let num1 = [99,32,349];
console.log([...num1,1112,8304]);    //expanding array

let vc = (x,y,z) => {
    return x+y+z
}
let num2 = [10,40,60];
console.log(vc(...num2));   //passing array elements into function

let str = "Atharva";
let arr = [...str];     //strings into array
console.log(arr);   

let details = {
    name:"Atharva",
    Dob : "06/11/2006",
}
console.log({...details,blood_group : "A",branch : "comp",roll_no:42});

//passing array in object the elements inside array become -> value and key becomes index of object

let array = [1,2,3,4,5,6];
let obj = {...array};
console.log(obj);


// rest
function sum(...args){
    return args.reduce((sum,i) => sum+i);
}
function min(msg,...args){
    console.log(msg);
    return args.reduce((min,i) => {
        if (i < min){
            return i;
        }else {
            return min;
        }
    })
}
function h(m,...args){
    console.log(m);
    console.log(args);
}

//Destructing
let names = ["Atharva","Utkarsh","Aditya","Soham","Riya"];
let [winner,runner,...others] = names
console.log([winner,runner]);
console.log(others);
 

let students = {
    name:"Atharva",
    age:18,
    Univ:"Sppu",
    cgpa:9.2,
    subjects:["m1","phy","chem","Eg","Mech"],

};

let {name:username,password : pass,city:place="Pune"} = students;




// practice Questions

//Q1
let ques1 = [2,3,4,5];
let result1 = (arr) =>{
    let sum = 0;
    for(let i=0 ; i<arr.length ; i++){
        arr[i] = arr[i]**2;
        sum += arr[i];
    }
    console.log("Squared array :",arr);
    console.log("Sum of array Elements:",sum);
    let avg = sum/arr.length;
    console.log(avg);

}
result1(ques1);


//Q2
let ques2 = [2,3,4,5];
console.log("before adding 5 to each element :",ques2);
let result2 = ques2.map((i)=> i+5);
console.log("After adding 5 to each element:",result2);


//Q3
function ques3(...args){
    let result3 = args.map((i) => i.toUpperCase());
    console.log(result3);
}


//Q4
let array4 = [2,3,4];
const doubleandReturnargs = (array4,...args) => {return [...array4,...args.map((i) => i*2)]};



//Q5
let obj1 = {
    name:"Atharva",
    class:12
}
let obj2 = {
    branch:"cs",
    roll_no:42,
}
function MergeObjects(object1,object2){
    console.log("first object :",object1);
    console.log("Second object:",object2);
    console.log("Merged objects :",{...object1,...object2});
}
MergeObjects(obj1,obj2);