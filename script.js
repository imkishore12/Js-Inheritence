//Question-1 : Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
//parent class
class Parent{
    constructor(name){
        this.name = name;
    }
    
}
//child class
class child extends Parent{
    constructor(name,branch){
        //passing name as argument to parent constructor
        super(name);
        this.branch = branch;
    }
}
// creates a new object to child class
var student1=new child("sai","CSE");
var student2=new child("kishore","CSE");
// creating a function using Prototype to the Parent class
Parent.prototype.userinfo=function(){
    return `my name is ${this.name} and i did ${this.branch} in B.Tech` ;
}
// calling the method of the Parent class
console.log(student1.userinfo());

//Questio-2:Write code to explain prototype chaining

//prototype is one object is inherited from another object having properties and methods

let Person=function(name,gender,branch){
    this.name=name;
    this.gender=gender;
    this.branch=branch;
}
/*here city oject is inherited to Person contructor and student is object that refers to Person and 
finally student object have prototype object of Person i.e..city and college function */

Person.prototype.city='rajumendry';
Person.prototype.college=function(){
    let college="gitam";
    console.log(college);
}

let student=new Person("sai","male","CSE");

// from this we have to say that student has protype of Person and protype of Person have Object Constructor
// to prove above condition is true
console.log(student.__proto__.__proto__===Object.prototype);

//Question-3:Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

// here we created sum funtion using Array.prototype using this prototype we can calculate the sum array
Array.prototype.sum = function () {
    let sum =0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

let Array1 = [10, 50, 70, 80];
let Array2 = [-2, -3, -4, -5];
let Array3 = [20, 20.20, 40.20, -5, 120];

console.log("sum of first Array : "+Array1.sum());
console.log("sum of second Array : "+Array2.sum());
console.log("sum of third Array : "+Array3.sum());


//Question-4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let Student=function(name,gender,branch){
    this.name=name;
    this.gender=gender;
    this.branch=branch;
}
Student.prototype.city='rajumendry';
Student.prototype.roll=10;
let Persons=new Student("sai","male","CSE");
for (let property in Persons) {
    // This condition checks the property is  Student own property or not
    if (Persons.hasOwnProperty(property)) {
        // IF the condition is true, it will print  the property which is  the own property of Student
        console.log("Persons Own Properties List: ", property);
    }
    else {
    // IF the condition is true, it will print  the property which is  the Inherited property of Student
        console.log("Persons inherited Properties are:", property);
    }
}