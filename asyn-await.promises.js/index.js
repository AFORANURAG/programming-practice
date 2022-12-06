// console.log("My name is anurag upadhyay and i here to learn more about async await and asynchrounous programming")
// const { rejects } = require("assert")
// const fs=require("fs")
// const { resolve } = require("path")

// fs.writeFileSync("test.txt","hello my name is anurag")
// //fs.writefilesync is sychronous that means 
// console.log("my name is anurag upadhyay and hello from my side")
// console.log("My name is anurag upadhyay and i here to learn more about async await and asynchrounous programming")


// // //#asychronous vs synchrounous programming in node js.
// // let a =1;
// // let b= 1;
// // setTimeout(()=>{
// //     console.log("timeout"+a)
// // },200)
// // a=10


// // console.log("sychronous")
// // console.log(a)
// // console.log(b)

// let myPromise=new Promise((resolve,rejects)=>{
// setTimeout(()=>{
//   resolve(new Promise((resolve,rejects)=>{
// if(2===2){
//     resolve("s")
// }else{
//     rejects("sorry")
// }

//     }),"success")
// },2000)

// })

// let data; 
// let request=fetch("http://localhost:8000/notes/?page_no=2")
// // fetch is browser api so it does not work in node it only work in browser.
// request.then(res=>
// res.json()

//     ).then(d=>{
//     console.log(d)
// }).catch(err=>
//     console.log(err)
//     )


//fethc return us a promises and there are two ways to handle promises one is sugar coated syntax like
//asych await or using .then and .cathc
let func=async()=>{
try {
    console.log("tutorial on async await")
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    // setTimeout(()=>{
    //     console.log(data)
    // },1000)
    console.log(data)
    console.log("done")
    //convertign a readble stream in to data will take a bit ttime so it is asynchrounous
} catch (error) {   
}
}
func()




