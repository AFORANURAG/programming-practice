let num=12345;
let num2=1221;
const reverse=num=>{
let answer_number=0
let i=0
    while(num>0){
let reminder=(num%10);
num=Math.floor(num/10)    
//0+3 
//3*10+2
//32*10+1
answer_number= answer_number*10+reminder
i++
}
return answer_number
}
console.log(reverse(121)==121)
