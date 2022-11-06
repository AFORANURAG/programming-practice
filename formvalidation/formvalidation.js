

// note before post register request , we are going to validate form, in the signup or register we are going to perform
// form validation so during form validation, we will provide all the important perimeter to validate methods
// 
// we are making an object in the contructor because in the post request we will submit it after strigify it 
// it does not matter whether you make it in contructor or methods because of (this keyword) and this keyword always
// points to owner or global object.
// one more thing , A class is a program template of an instance of an object. so essentially in the class this always 
//points to  owner object instance  
//  authentication , so start with a class and i am going to use classes 
// remember that  you have only an hour for to solve this
class User{
// this is main class 
// oops breaks problems into large problem into pieces and some cool things about OOPS is abstraction,inheritanmce,encapsulation
//and polymorphism 
constructor(){
// doing  this in the constructor will make things difficult
// dekho contructor mai isliye nhi pass kr rahe kyunki validate password and validate username ko (p,u) chaiye as arguments
// so uske liye hamko signup ko (p,u) dena padega user(u,y,y,y,),signup(u,p) or singup(this.pass,this.usern)
// so doing this in methods is actually the best practice in terms of complexity since it reduces complexity.
}
validatepassword(password){
return password.length<8?false:true
}
validateusername(u){
if(u.includes("@")){
    return false
}else{
    return true
}    
}
async signup(n,e,u,p,m,d){
let validated=this.validatepassword(p)&&this.validateusername(u)
if(validated){
this.name=n
this.email=e
this.username=u
this.password=p
this.mobile=m
this.description=d
try{
//https://masai-api-mocker.herokuapp.com/    
let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
// it is going to an object
method:'POST',
body:JSON.stringify(this),
headers:{
'Content-Type':'application/json'    
}
})
let data=await res.json()
console.log(data)
}catch(err){
console.log(err)
}
}

}
async login(u,p){
// we are going to send this data to server in the form of a json file 
// so lets make an object and stringify
try{
    let obj={
        username:u,
        password:p    
        }
        let res= await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
        'Content-Type':'application/json'
        }
        })
        let data=await res.json()
        let token=data.token
        console.log(data)
  getdata(u,token)      
}catch(err){
console.log(err)
}
 
}
}
let user=new User()
let Register=()=>{
// catch all the values and basically send them to the server
const reg_form=document.getElementById("reg_form")
    const name = reg_form.name.value;
    const email=reg_form.email.value;
    const username=reg_form.username.value;
    const password=reg_form.password.value;
    const mobile=reg_form.mobile.value;
    const description=reg_form.description.value;
console.log(name,email,username,password,mobile,description)
user.signup(name,email,username,password,mobile,description)
}


let Login=()=>{
    const username1=document.getElementById("login-username").value  
    const password=document.getElementById("login-password").value
    user.login(username1,password)
}
// after login , basically it is going give us all the information about the user in json/object format
let getdata=async(username,token)=>{
// it does not have any button , it will invoke along with login or whenever you want to know all the information about the 
// some user , give it token name and username 
// a method in a class is there to perform some operation on the data structure or data of data structure like sending data
// to the server so those methods(operations) are only for you object instance(data structure)
try{

let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
// so it is a get request so don't need to write method and there is no object to stringify
headers:{
Authorization:`Bearer ${token}`,
'Content-Type':'application/json'    
}
})
let data= await res.json()
console.log(data)
}catch(err){console.log(err)}


}


// time for login  
// after login, you will get a token for you for id and it basically indicates your unique identity