import './ExpenseDate.css';
function ExpenceDate(props){
     
    const mouth =props.d.toLocaleString('en-US',{month: "long"});
    const day = props.d.toLocaleString('en-US',{day: "2-digit"});
    const year = props.d.getFullYear();
    return(
        <div className="expense-date">
        <div className="expense-date__month ">{mouth}</div><br></br>
        <div className="expense-date__year">{year}</div><br></br>
        <div className="expense-date__day">{day}</div>
        </div>
    );

}
 export default ExpenceDate;