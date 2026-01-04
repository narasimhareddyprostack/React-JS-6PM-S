import CompB from "./CompB";
let CompA=()=>{
   let eid=101;
   let ename="Rahul";
   let loc=["Wayanad","Bangalore","New Delhi"];
   let details={ esal:45000.45,email:"rg@gmail.com"};

    return <div>
            <h3>Component A</h3>
            <h4>Employee Name:{ename}</h4>
            <hr/>
            <CompB msg={"GM"} emp_Name={ename} emp_Id={eid} emp_Loc={loc}/>
           </div>
}
export default CompA;