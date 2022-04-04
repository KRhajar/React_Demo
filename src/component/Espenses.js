import ExpenseItem from "./ExpenseItem";
import './Espences.css';

function Espenses(props){
    return (
        <div className="expenses">
          
          <ExpenseItem
            t={props.items[0].title}
            a={props.items[0].amount}
            d={props.items[0].data}
          ></ExpenseItem>
          <ExpenseItem
            t={props.items[1].title}
            a={props.items[1].amount}
            d={props.items[1].data}
          ></ExpenseItem>
          <ExpenseItem
            t={props.items[2].title}
            a={props.items[2].amount}
            d={props.items[2].data}
          ></ExpenseItem>
          <ExpenseItem
            t={props.items[3].title}
            a={props.items[3].amount}
            d={props.items[3].data}
          ></ExpenseItem>
        </div>
      );

}
 export default Espenses;