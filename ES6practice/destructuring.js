const obj={
    name:"anurag",
    age:"19", 
    start:()=>{
       
    } ,  
   gender:"male",
   education:"highschool",
   hobbies:"type race,sci-fi",
   skills:{
    react:"basic react",
    ajax:"good level",
   express:"good level",
   dsa:"good level"    
   }
   }
   const {name,age,start,gender,skills:{react}}=obj
   console.log(name,age,start,gender,react)
   let array=[1,2,3,4,5,6,"anurag","india","money","problems","learning"]
const [a,b,c,...d]=array
   console.log(a,b,c,d)
   // if you elements like 1,2,3,4,5,apple, mango etc.so in this if we use rest opearator , it will return this [1,2,3,4,5,apple]
   // and spread is the opposite of rest , if there is an array , by using spread we can get all the elements so [1,2,3,4,5]
   // using spread it will return us 1,2,3,4,5. so yeah this is awesome 
   // so you just need keys and this is destructure.
   // we try to destructure a object and we can reduce redundancies and can get relevent values without using excess of dot 
   //notation