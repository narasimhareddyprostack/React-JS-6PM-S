import React from "react";
class CompB extends React.Component{

    render(){
        return <div>
                <h3>Component B</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Employee Id:{this.props.emp_Id}</h4>
                </div>
    }
}
export default CompB;