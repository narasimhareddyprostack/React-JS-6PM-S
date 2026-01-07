import React, { useState } from 'react'

const Message = () => {
  let [msg,setMsg]=useState("Hello...")
  /* let gmHandler=()=>{
    setMsg("Good Morning")
  }
  let gaHandler=()=>{
    setMsg("Good Afternoon")
  } */
  let updateHandler=(value)=>{
    console.log(value)
    setMsg(value)
  }
  return <>
            <h4>Message Component</h4>
            <h4>Value:{msg}</h4>
            <button onClick={updateHandler.bind(null,"Good Morning")}>GM</button>
            <button onClick={updateHandler.bind(null,"Good Afternoon")}>GA</button>
            <button onClick={updateHandler.bind(null,"Good Evening")}>GE</button>
            <button onClick={updateHandler.bind(null,"Good Night")}>GN</button>
         </>
}

export default Message