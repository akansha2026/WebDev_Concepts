// data type
// loop
// conditionals
// arrays
// strings
// functions
// struct, class

/*
Variables:
int, float, double, char, string, bool, 
*/
// How to define and use variables
// let, const, var

// Semi-colon is optional in javascript

const x = 10
// x = 20 // error

let y = 10

let myName = "Akansha"
console.log(typeof myName)

myName = 20 // no error
console.log(typeof myName)

var z = 10 // old way of defining variables
console.log(typeof z)

z = 30.0 
console.log(typeof z)

// How we print output to terminal in cpp
// cout << "Hello World" << endl;

console.log("Hello World")

// Arrays
// How to define and use arrays
// Cpp 
// int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8}

// Javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr)

// How to access elements of array
console.log(arr[0])

// How to change elements of array
arr[0] = 10

console.log(arr)

// How to add elements to array
arr.push(20)
console.log(arr)

// How to remove elements from array
arr.pop()
console.log(arr)

// How to find size of array
console.log(arr.length)

// Loops : CPP
// for loop
// while loop
// do while loop

// Loops: Javascript
// for loop

// - for of loop
// - for in loop
// - for each loop
// - for loop

// while loop
// do while loop

// for of loop
for(let element of arr){
    console.log(element)
}

// for in loop
for(let index in arr){
    console.log(index, arr[index])
}

// simple for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

function randomBetween(a,b){
    let num1 = Math.random();
    let num2 = num1*(b-a+1);
    let num3 = Math.floor(num2);
    let num4 = num3 + a;
    return num4
}