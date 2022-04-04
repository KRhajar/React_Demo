import React from "react";
import ReactDOM from "react-dom";
import App from"./App"
ReactDOM.render(<App></App>, document.getElementById('root'));
// // class in js 
// class Person {
//      constructor(name,age){
//          this.name=name,
//           this.age=age 
//      }
//       speak=()=>console.log("my name is" ,this.name  ,"and  my age is ",this.age,"years old" );

// }
// //  const person1 = new Person("hajar",25);
// //  person1.speak();
// //   console.log(person1);
//   class Child extends Person{
//       constructor(name ,age,lastname){
//            super(name,age);
//            this.lastname=lastname ;
            
//       }
//       hihi=()=>console.log("my last name is " ,this.lastname);

//  }
//  const child = new Child("hind",24,"KHALIFI");
//  child.speak();
//  child.hihi();
