var data;

function onStart(){
    fetchData();
}

//Fetch Data
function fetchData(){
    fetch("organization.json")
    .then((response)=>{
        return response.json();
    })
    .then((organizationData) =>{
        data = organizationData;
        console.log(data);
    })
}

//Access Basic Information
function AccessInfo(){
    //get Employee 2 Details
    const emp2 = data.employees[1];

    //get Employee Name & Position
    const emp1Name = data.employees[0].name;
    const emp1Position = data.employees[0].position;


    console.log("Employee 2 Details", emp2);
    console.log("Employee1 Name",emp1Name);
    console.log("Employee1 Position",emp1Position)
}

function EmployeeWorkHistory(){
    data.employees[0].workHistory.forEach((obj)=>{
        console.log(`Company: ${obj.company}, Position: ${obj.position}`)
    })
}

//Filtering Work History by a Condition: Not current one
function GetPreviousCompanyDetails(){
    let workHistory = data.employees[1].workHistory.filter(work => work.endYear);
    console.log("Previous Work History: ",workHistory);
}

//Filter by Position: Software Enginners
function getSoftwareEnginnersList(){
    let se = data.employees.filter(p => p.position === "Software Engineer");
    console.log("Software Engineers",se);
}

//Filter By Country: Techland
function getTechlandEmployees(){
    let emps = data.employees.filter(e => e.address.country === "Techland");
    console.log(emps);
}

function getAllEmployeesWorkHistory(){
    data.employees.forEach(emp => {
        const empName = emp.name;
        const workHistory = emp.workHistory;

        console.log("---> Employee :",empName)
        workHistory.forEach(work => {
            console.log(`Worked in ${work.company} as ${work.position}`)
        })
    })
}

//Add new skill to Employee 1
function addNewSkillToEmp1(){
    data.employees[0].skills.push("Webpack");
    console.log("Employee 1 Skills :",data.employees[0].skills);
}

//Add new skill to Given Employee (Array)
function addNewSkillToEmployee(){
    const empId = 1;
    const emp = data.employees.find(e => e.id === empId);
    if(emp){
        emp.skills.push("Webpack");
        console.log("Updated Skills : ",emp.skills);
    }
}

//Add new key-value pair to address (Set)
function addNewProperty(){
    const empAddress = data.employees[0].address;
    empAddress["pincode"] = "501202";
    console.log("Updated Address ",empAddress);
}

//Add new key-value pair to all employees
function addNewPropertyToAll(){
    data.employees.forEach(employee => {
        const empAddress = employee.address;
        empAddress["pincode"] = "501202";
    })

    console.log("Updated Employee Addresses :",data);
}

//Add new company to workHistory (adding set to array)
function addNewCompanyDetails(){
    const newCompany =         {
        "company": "Virtusa",
        "position": "Lead Consultant",
        "startYear": 2022,
        "endYear": null
      }
    const workHistory = data.employees[0].workHistory;
    workHistory.push(newCompany);

    console.log("Work History :",workHistory);
}

//Checking Skill Existence:
function checkSkillExist(){
    const isPresent = data.employees[0].skills.includes("React");
    console.log("React includes in Employee 1 Skill :",isPresent);
}

//Check age present in Employee1 (key present in Set)
function agePresentForEmp1(){
    const employee1 = data.employees[0];
    console.log("Age? METHOD 1", employee1.hasOwnProperty("age"));
    console.log("Age? METHOD 2", "age" in employee1);
}

//Check all employees having age > 20?
function AllAgeGreaterThanTwenty(){
    const allAboveTwenty = data.employees.every(employee => employee.age > 20);
    console.log("All are above Twenty ?",allAboveTwenty)
}

//Filter all employees having age > 28?
function GetAllAgeGreaterThanThirty(){
    const allAboveThirty = data.employees.filter(employee => employee.age > 28);
    console.log("All are above 28 ?",allAboveThirty)
}

//Check any employee having age < 30?
function anyEmployeeLessThanThirty(){
    const lessThanThirty = data.employees.some(emp => emp.age < 30);
    console.log("Any Less than 30 :", lessThanThirty)
}