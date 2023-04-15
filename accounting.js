"use strct";
// console.log(localStorage.getItem("employee"))
// let storage=localStorage.getItem("employee")

let table = document.getElementById("employeeTable");

let user = localStorage.getItem("employee");

let newArr = JSON.parse(user);
let d = 0;
let n = 0;
let j = 0;
let y = 0;
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i].department === "Development") {
    y++;
  } else if (newArr[i].department === "Marketing") {
    j++;
  } else if (newArr[i].department === "Administration") {
    d++;
  } else if (newArr[i].department === "Finance") {
    n++;
  }
}
console.log(n);
console.log(y);
console.log(d);
console.log(j);

function tableData() {
  let trE1 = document.createElement("tr");
  table.appendChild(trE1);

  let dev = document.createElement("td");
  dev.textContent = "Development";
  trE1.appendChild(dev);

  let devCount = document.createElement("td");
  devCount.textContent = y;
  trE1.appendChild(devCount);




  let trE2=document.createElement("tr")
  table.appendChild(trE2);

  let mar=document.createElement("td")
  mar.textContent="Marketing"
  trE2.appendChild(mar)

  let marCount = document.createElement("td");
  marCount.textContent = j;
  trE2.appendChild(marCount);

  let trE3=document.createElement("tr")
table.appendChild(trE3)

let adm=document.createElement("td");
adm.textContent="Administration"
trE3.appendChild(adm);

let admCount=document.createElement("td");
admCount.textContent=d;
trE3.appendChild(admCount)


let trE4=document.createElement("tr")
table.appendChild(trE4)

let fai=document.createElement("td");
fai.textContent="Finance"
trE4.appendChild(fai);

let faiCount=document.createElement("td");
faiCount.textContent=n;
trE4.appendChild(faiCount)

let avgOne=document.createElement("td")
avgOne.textContent=avgSalThree();
trE3.appendChild(avgOne)

let avgTwo=document.createElement("td")
avgTwo.textContent=avgSalTwo();
trE2.appendChild(avgTwo)

let avgThree=document.createElement("td")
avgThree.textContent=avgSalOne();
trE1.appendChild(avgThree)

let avgFour=document.createElement("td")
avgFour.textContent=avgSalFour();
trE4.appendChild(avgFour)









let totalOne=document.createElement("td")
totalOne.textContent=totalSalTwo();
trE3.appendChild(totalOne)

let totalTwo=document.createElement("td")
totalTwo.textContent=totalSalThree();
trE2.appendChild(totalTwo)

let totalThree=document.createElement("td")
totalThree.textContent=totalSalFour();
trE1.appendChild(totalThree)

let totalFour=document.createElement("td")
totalFour.textContent=totalSalOne();
trE4.appendChild(totalFour)

let trf1=document.createElement("tr")
table.appendChild(trf1);

let empty=document.createElement("td")
empty.textContent=""
trf1.appendChild(empty)

let trf2=document.createElement("td");
trf2.textContent="Total number of employees"
trf1.appendChild(trf2)


let trf3=document.createElement("td");
trf3.textContent="Average salary for all departments"
trf1.appendChild(trf3)


let trf4=document.createElement("td");
trf4.textContent="Total salary for all departments"
trf1.appendChild(trf4)



let row=document.createElement("tr")
table.appendChild(row);


let emptyy=document.createElement("td")
emptyy.textContent=""
row.appendChild(emptyy)


let dataOne=document.createElement("td")
dataOne.textContent=d+n+j+y
row.appendChild(dataOne)


let avgSal=document.createElement("td")
avgSal.textContent=avgSalOne()+avgSalTwo()+avgSalThree()+avgSalFour();
row.appendChild(avgSal)

let totalSal=document.createElement("td")
totalSal.textContent=totalSalOne()+totalSalTwo()+totalSalThree()+totalSalFour()
row.appendChild(totalSal)



// let trE6=document.createElement("tr")
// table.appendChild(trE6);




// let empNum=document.createElement("td")
// empNum.textContent=d+n+j+y;
// trE6.appendChild(empNum)


// let avgSal=document.createElement("td")
// avgSal.textContent=avgSalOne()+avgSalTwo()+avgSalThree()+avgSalFour();
// trE6.appendChild(avgSal)

// let totalSal=document.createElement("td")
// totalSal.textContent=totalSalOne()+totalSalTwo()+totalSalThree()+totalSalFour()
// trE6.appendChild(totalSal)







}

function avgSalOne(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Administration"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
  
  }

 }
return z/d

}





function avgSalTwo(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Marketing"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
     
  }

 }
return z/j

}
function avgSalThree(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Development"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
   
  }

 }
return z/y

}
function avgSalFour(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Finance"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
      
  }

 }
return z/n

}


function totalSalOne(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Finance"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
  
  }

 }
return z

}
function totalSalTwo(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Development"){
        
  
        z+=parseInt(newArr[i].salary);
    
   
  }

 }
return z

}
function totalSalThree(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Marketing"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
    
  }

 }
return z

}
function totalSalFour(){
    let z=0;
 for(let i=0;i<newArr.length;i++){

    if(newArr[i].department === "Administration"){
        
  
        z+=parseInt(newArr[i].salary);
    
     
    
  }

 }
return z

}






tableData();

