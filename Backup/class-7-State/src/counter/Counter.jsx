import React,{useState} from "react";
//import React from "react";
let Counter=()=>{
   let [counter,setCounter]=useState(0)  
   let incrHandler=()=>{
    //setCounter(5)
    setCounter(counter+1)
   }
   let decrHandler=()=>{
    setCounter(counter-1)
   }
   return <div>
                <h4>Counter Component</h4>
                <h3>Counter Value:{counter}</h3>
                <button onClick={decrHandler}>DECR</button>
                <button onClick={incrHandler}>INCR</button>
              
           </div>
}
export default Counter;