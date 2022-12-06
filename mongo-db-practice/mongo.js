const mongoose=require("mongoose")
// console.log(mongoose)

const Userschema=mongoose.Schema({
name:String,
age:Number,
education:String
})
let Usermodel=mongoose.model("practice",Userschema)
const connect=mongoose.connect("mongodb://127.0.0.1:27017/testing")
let myfun=async()=>{
await Usermodel.insertMany([{name:"Anurag",age:"19",education:"BCA"}])
console.log("data sented successfully ,thanks for your time")
}
myfun()


// so by convention the first letter of model name should be capital its like the Array or 
//String.because the name of constructor and classes should start with a capital letter
// its like the class or constructor is used for constructing objects or data structure

