'use strct'
// console.log(localStorage.getItem("employee"))
// let storage=localStorage.getItem("employee")


let user = localStorage.getItem('employee');
 let newArr=JSON.parse(user)

for(let i=0;i<newArr.length;i++){
let x =newArr[i].fullName;
 console.log(x)}