// import React ,{Component}from "react";
//  class Regularclass{}
//  class  Compentclass  extends Component{}
//   const regularclas = new Regularclass();
//   const  compentcalss  = new  Compentclass ();
//   console.log("regularclass",regularclas);
//   console.log("compentclass",compentcalss);
// // class App extends Component
// // {
// // render(){
// //     return(
// //         <div>
// //         <h1>hello react</h1>
// //         <p>  let's start </p>
// //         <p> luve2code  </p>
// //         </div>
// //     )
// // }

// }
// scensd ways to defind an compnent

// import ExpenseItem from "./component/ExpenseItem";
import Espenses from "./component/Espenses";
function App() {
const expences = [
  { 
    id: "e1",
    title: "toilet paper",
    amount: 94.19,
    data: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 945.19,
    data: new Date(2020, 1, 14),
  },
  {
    id: "e3",
    title: "new tapie",
    amount: 94.19,
    data: new Date(2021, 5, 4),
  },
  {
    id: "e4",
    title: "salle",
    amount: 9419,
    data: new Date(2020, 10, 14),
  },
];

  
  return (
    <div>
    <h1>hello react</h1>
  <Espenses items={expences} ></Espenses>
  </div>
  );
}
export default App;
