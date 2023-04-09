

let emp=[]
function Employee(employeeID,fullName,department,level,imageURL,salary){

this.employeeID=employeeID;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageURL=imageURL;
this.salary=salary;
emp.push(this);

}

Employee.prototype.calcRandom=function(){

   salary=0;
if(this.level=="Senior"){
  this.salary=(Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500)
  this.salary-=this.salary*(7.5/100)
 

}
 else if (this.level=="Mid-Senior"){
  this.salary= (Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000);
  this.salary-=this.salary*(7.5/100)
  
}
else if(this.level=="Junior"){
    this.salary= (Math.floor(Math.random() * (1000 - 500 + 1) ) + 500);
    this.salary-=this.salary*(7.5/100)
}
}

Employee.prototype.render=function(){

document.write(`<h4>Employee Name: ${this.fullName} Salary: ${this.salary} <h4>`)

}


let Ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior")
let Lana=new Employee(1001,"Lana Ali","Finance","Senior")
let Tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior")
let Safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior")
let Omar=new Employee(1004,"Omar Zaid","Development","Senior")
let Rana=new Employee(1005,"Rana Saleh","Development","Junior")
let Hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")

for(let i=0;i<emp.length;i++){
emp[i].calcRandom()
emp[i].render()


}