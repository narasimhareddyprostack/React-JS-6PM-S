let CompB = (props)=>{

    let {emp_Name,emp_Id,emp_Loc} = props;
    return <div>
                <h4>Component B</h4>
                <pre>{JSON.stringify(props)}</pre>
                <h4>Employee Name:{emp_Name}</h4>
                <h4>Employee Id:{emp_Id}</h4>
                <h4>Employee Loc:{emp_Loc[2]}</h4>
           </div>
}
export default CompB;