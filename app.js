let staticSection = document.getElementById("static");
let empSection = document.getElementById("empSection");
let deSection = document.getElementById("deSection");
let de2Section = document.getElementById("de2Section");
let de3Section = document.getElementById("de3Section");
let myForm = document.getElementById("employeeForm");
let emp = [];
function Employee(employeeID, fullName, department, level, imageURL, salary) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salary;
 emp.push(this)
}

Employee.prototype.calcRandom = function () {
  this.salary = 0;
  if (this.level == "Senior") {
    this.salary = Math.ceil(Math.random() * (2000 - 1500 + 1)) + 1500;
    this.salary -= this.salary * (7.5 / 100);
  } else if (this.level == "Mid-Senior") {
    this.salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    this.salary -= this.salary * (7.5 / 100);
  } else if (this.level == "Junior") {
    this.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    this.salary -= this.salary * (7.5 / 100);
  }
};

Employee.prototype.uniqueID = function () {
  this.employeeID = Math.floor(Math.random() * 9000 + 1000);
};

myForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let employeeID = 0;
  let fullName = event.target.Name.value;
  let department = event.target.Dep.value;
  let level = event.target.Level.value;
  let img = event.target.img.value;
  // let salary=event.target.sal.value;
  let newEmployee = new Employee(employeeID, fullName, department, level, img);
 
  newEmployee.calcRandom();
  newEmployee.uniqueID();
  newEmployee.render();
  saveData(emp);
 
}









Employee.prototype.render = function () {
  if (this.department === "Administration") {
    let img = document.createElement("img");
    img.src = this.imageURL;
    empSection.appendChild(img);

    let nameEmp = document.createElement("p");
    nameEmp.textContent = "Name: " + this.fullName;
    empSection.appendChild(nameEmp);

    let id = document.createElement("p");
    id.textContent = "ID-" + this.employeeID;
    empSection.appendChild(id);

    let dep = document.createElement("p");
    dep.textContent = "Department: " + this.department;
    empSection.appendChild(dep);

    let level = document.createElement("P");
    level.textContent = "Level: " + this.level;
    empSection.appendChild(level);

    let sal = document.createElement("p");
    sal.textContent = "Salary: " + this.salary;
    empSection.appendChild(sal);
  } else if (this.department === "Marketing") {
    let img = document.createElement("img");
    img.src = this.imageURL;
    deSection.appendChild(img);

    let nameEmp = document.createElement("p");
    nameEmp.textContent = "Name: " + this.fullName;
    deSection.appendChild(nameEmp);

    let id = document.createElement("p");
    id.textContent = "ID-" + this.employeeID;
    deSection.appendChild(id);

    let dep = document.createElement("p");
    dep.textContent = "Department: " + this.department;
    deSection.appendChild(dep);

    let level = document.createElement("P");
    level.textContent = "Level: " + this.level;
    deSection.appendChild(level);

    let sal = document.createElement("p");
    sal.textContent = "Salary: " + this.salary;
    deSection.appendChild(sal);
  } else if (this.department === "Development") {
    let img = document.createElement("img");
    img.src = this.imageURL;
    de2Section.appendChild(img);

    let nameEmp = document.createElement("p");
    nameEmp.textContent = "Name: " + this.fullName;
    de2Section.appendChild(nameEmp);

    let id = document.createElement("p");
    id.textContent = "ID-" + this.employeeID;
    de2Section.appendChild(id);

    let dep = document.createElement("p");
    dep.textContent = "Department: " + this.department;
    de2Section.appendChild(dep);

    let level = document.createElement("P");
    level.textContent = "Level: " + this.level;
    de2Section.appendChild(level);

    let sal = document.createElement("p");
    sal.textContent = "Salary: " + this.salary;
    de2Section.appendChild(sal);
  } else if (this.department === "Finance") {
    let img = document.createElement("img");
    img.src = this.imageURL;
    de3Section.appendChild(img);

    let nameEmp = document.createElement("p");
    nameEmp.textContent = "Name: " + this.fullName;
    de3Section.appendChild(nameEmp);

    let id = document.createElement("p");
    id.textContent = "ID-" + this.employeeID;
    de3Section.appendChild(id);

    let dep = document.createElement("p");
    dep.textContent = "Department: " + this.department;
    de3Section.appendChild(dep);

    let level = document.createElement("P");
    level.textContent = "Level: " + this.level;
    de3Section.appendChild(level);

    let sal = document.createElement("p");
    sal.textContent = "Salary: " + this.salary;
    de3Section.appendChild(sal);
  }
};

function saveData(data) {
  let stringifyData = JSON.stringify(data);
  localStorage.setItem("employee", stringifyData);
}

let Ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg")
let Lana=new Employee(1001,"Lana Ali","Finance","Senior","./assets/Lana.jpg")
let Tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior","./assets/Tamara.jpg")
let Safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg")
let Omar=new Employee(1004,"Omar Zaid","Development","Senior","./assets/Omar.jpg")
let Rana=new Employee(1005,"Rana Saleh","Development","Junior","./assets/Rana.jpg")
let Hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg")

for (let i = 0; i < emp.length; i++) {
  emp[i].calcRandom();

  emp[i].render();
}







function getData() {
  let retrieveData = localStorage.getItem("employee");

  let dataArr = JSON.parse(retrieveData);

  if(dataArr!==null){

  for (let i = 7; i <= dataArr.length; i++) {
  
  new Employee(
      dataArr[i].employeeID,
      dataArr[i].fullName,
      dataArr[i].department,
      dataArr[i].level,
      dataArr[i].imageURL,
      dataArr[i].salary
    );

    emp[i].render();
  
  }
  }
}


getData();
