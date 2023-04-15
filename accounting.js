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

















}

tableData();
