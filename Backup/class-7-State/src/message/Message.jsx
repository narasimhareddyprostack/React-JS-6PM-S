import React, {useState} from "react";
function Message(){
    //let msg="Hello";
    //let [variable,funct ]=useState("Hello!")
    let [msg,setMsg ]=useState("Hello.......!")
    let gmHandler =()=>{
        //how to update msg varible? using setMSg() function
        setMsg("Good Morning")
    }
    let gaHandler = ()=>{
        setMsg("Good Afternoon")
    }
    return <React.Fragment>
            <h4>Message Component</h4>
            <h3>Message Value:{msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
    
           </React.Fragment>
}
export default Message;