import React from "react";
import CompB from './CompB'
class CompA extends React.Component{
    eid=101;
    ename="Rahul";

    render(){
        return <div>
                    <h3>Component A</h3>
                    <hr/>
                    <CompB msg={"GM"} time={7} emp_Id={this.eid}/>
                </div>
    }
}
export default CompA;