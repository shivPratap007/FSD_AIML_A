// let a=12;
// if (a>10){
//     a=30;
//     let b=67;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// Data types in js
console.log(typeof NaN);
console.log(Number.MAX_VALUE);

const hello = (msg) => console.log(msg);
hello("Hello World");


// spread 

let arr=[1,2,3];
let arr2=arr;
let arr3=[...arr];

console.log(arr===arr2);
console.log(arr==arr3);


const p={
    name:"ram",
    age:"22",
}

const newP={...p};
newP.name="shyam";
console.log(newP);

// Exercise 2

const mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.add(7);
mySet.add(8);
mySet.add(9);
mySet.add(10);


// filter cannot be applied on set

// but we can use it using destructure array method

console.log([...mySet].filter((value)=>value%2==0))
console.log(mySet);


// reduce 
let arr1=[1,2,3,4,5,6,7,8,9];

let sum=arr1.reduce((a,b)=>a+b,0);
console.log(sum);



