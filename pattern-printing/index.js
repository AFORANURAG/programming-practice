//1
//1 2
//1 2 3
//1 2 3 4 
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1
//learning -----> ternary operator.

// let a=8==8?"yes":"no it is not "
// console.log(a)
const rotatedTriangle=(N)=>{
let totalColInrow=1
for(let row=1;row<=2*N-1;row++){
totalColInrow=row>N?2*N-row:row;
let str="";
for(let col=1;col<=totalColInrow;col++){
str+=col+" "
}
console.log(str)
}
}

// A very important thing to notice here is the number of time your loop is running and then setting conditiotn
//accordingly
// rotatedTriangle(5)
//     1
//
const printrhombus=(N)=>{
let totalColInrow=1
    let spaces=1
    for(let row=1;row<=2*N-1;row++){
    totalColInrow=row>N?2*N-row:row;
    let str="";
    spaces=N-totalColInrow
    // console.log(spaces)
    for(let j=1;j<=spaces;j++){
        str+=" "
    }
    for(let col=1;col<=totalColInrow;col++){
    str+=col+" "
    }
    console.log(str)
    }


}

printrhombus(10)







