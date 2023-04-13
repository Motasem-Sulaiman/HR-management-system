'use strct'
// console.log(localStorage.getItem("employee"))
// let storage=localStorage.getItem("employee")


let user = localStorage.getItem('employee');
 let newArr=JSON.parse(user)

for(let i=0;i<newArr.length;i++){
    if(newArr[i].department==="Development"){
let x =newArr[i].department;
 console.log(x)}}