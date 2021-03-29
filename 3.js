 import{sumOfTwo}  from"./1.js"
 let result= sumOfTwo(2,4);
 console.log(result)

 import{subOfTwo}  from"./2.js"
 let result1= subOfTwo(4,2);
 console.log(result1)


 //create of student object
 let student={
         rollno:100,
         name:"rama",
         age:20,
         passStatus:true,
         getAverage:function(){
             return 90;
         }
 };


 console.log(student.rollno)
 student.city="Mudigubba"
 console.log(student)
  
 delete student.passStatus;
 console.log(student)
 student.v
  
 for(let v in student)
 {
     console.log(student[v])
 }


 function Employee( name , age ,salary)
 {
     this.name=name;
     this.age= age;
     this.salary=salary; 
 }
  

 //create employee class


 class Employee1{

      constructor(name,age,salary)
      {
        this.name=name;
        this.age= age;
        this.salary=salary;
      }
       
 }

 let obje1 = new Employee ("rama",21,100000)
 console.log(obje1)
 let obje2 = new Employee ("sita",21,100000)
 console.log(obje2)

 // add getaddress method to Student
