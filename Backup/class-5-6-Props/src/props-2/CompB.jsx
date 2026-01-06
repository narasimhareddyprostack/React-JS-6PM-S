function CompB(props){
    return <div>
            <h3>Component B</h3>
            <pre>{JSON.stringify(props)}</pre>
            <h4>Wish Message:{props.msg}</h4>
            <h4>Employee Id:{props.emp_Id}</h4>
           </div>
}
export default CompB;