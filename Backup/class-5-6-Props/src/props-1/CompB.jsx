let CompB = (props)=>{

    return <div>
                <h4>Component B</h4>
                <pre>{JSON.stringify(props)}</pre>
                <h4>Wish Message:{props.msg}</h4>
                <h4>Employee Name:{props.emp_Name}</h4>
                <h4>Employee Id:{props.emp_Id}</h4>
                <h4>Employee Loc:{props.emp_Loc[2]}</h4>
           </div>
}
export default CompB;