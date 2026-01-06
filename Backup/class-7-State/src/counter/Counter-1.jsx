import React,{useState} from "react";
//import React from "react";
let Counter=()=>{
   let [counter,setCounter]=useState(0)  
   let [msg,setMsg]=useState("Hello")  
   let [users,setUsers]=useState(["RG","SG"])  
   let [emp,setEmp]=useState({})  
   let [flag,setFlag]=useState(true)  

    return <div>
                <h4>Counter Component</h4>
                <h3>Counter Value:{counter}</h3>
                <h3>Message Value:{msg}</h3>
                <h3>Users Value:{users}</h3>
                <h3>Flag Value:{flag}</h3>
           </div>
}
export default Counter;