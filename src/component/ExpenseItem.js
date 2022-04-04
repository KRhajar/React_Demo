 import './ExpenseIteam.css';
 import ExpenceDate from './ExpenseDate';
 import Card from './Card';
function ExpenseItem(props) {
    // const expenceDate  =new Date(21,2,28);
    //  const expenseTime ='car Insurance';
    //  const expenseAmount =294.67;
    // const mouth =props.d.toLocaleString('en-US',{month: "long"});
    // const day = props.d.toLocaleString('en-US',{day: "2-digit"});
    // const year = props.d.getFullYear();
  return (
    //   <div>hhhhh</div>
    //  cv <div> hello<div> i 'm here</div></div> <h1>Expense Item</h1> here we have an error becouse in jsx code we must have just one root element
   // to run a dimaic data we must use the {} syntax by using a basic js syntax
   <Card className="expense-item">
     <ExpenceDate d={props.d }></ExpenceDate>
     {/* <div>
     <div>{mouth}</div><br></br>
     <div>{year}</div><br></b r>
     <div>{day}</div>
     </div> */}
    {/* <div>{props.d.toISOString()}</div> */}
       <div className="expense-item__description">
      <h2>{props.t}</h2>
       <div className="expense-item__price">${props.a}</div>
      </div>
      </Card>
  );
}
export default ExpenseItem;
 