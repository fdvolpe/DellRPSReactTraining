class Person
{
    constructor(...args){
        this.Name = "";
        this.Passport = "";
        this.Age = 18;
    }

    displayDetails(){
        console.log(`Details for ${this.Name} are as follows: 
                    Passport: ${this.Passport},
                    Age: ${this.Age}`);
    }
}

class Employee extends Person{
    constructor(){
        super(); // call base class constructor
        this.EmpId = '';
        this.Designation = '';
        this.Salary = 0;
    }

    displayDetails(){
        console.log(`Emp Details: name: ${this.Name} | 
                    empId: ${this.EmpId} | 
                    designation: ${this.Designation} | 
                    salary: ${this.Salary}`)
    }

    static onBoard(...employees){
        console.log(`Onboarded ${employees.length}`);
    }
}

//Creating objects
var Ramu = new Employee();
Ramu.Name = 'Ramu';
Ramu.Designation = 'Team Lead';
Ramu.Salary = 50000000;
Ramu.EmpId = 'DELL-1001';
Ramu.displayDetails();
Employee.onBoard(Ramu);

var Prateek = new Person();
Prateek.Name = "Prateek Sharma";
Prateek.Age = 23;
Prateek.Passport = 'IND-32132165564654';
Prateek.displayDetails();