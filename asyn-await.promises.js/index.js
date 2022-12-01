console.log("My name is anurag upadhyay and i here to learn more about async await and asynchrounous programming")
const fs=require("fs")

fs.writeFileSync("test.txt","hello my name is anurag")
//fs.writefilesync is sychronous that means 
console.log("my name is anurag upadhyay and hello from my side")
console.log("My name is anurag upadhyay and i here to learn more about async await and asynchrounous programming")


// //#asychronous vs synchrounous programming in node js.
// let a =1;
// let b= 1;
// setTimeout(()=>{
//     console.log("timeout"+a)
// },200)
// a=10


// console.log("sychronous")
// console.log(a)
// console.log(b)