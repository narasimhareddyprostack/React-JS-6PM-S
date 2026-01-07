import React from "react";
class Message extends React.Component{
    //msg="Hello" //component own data? state?
    //How to update state? using 1)state={} 2)setState()
    state={
        "msg":"Helloo"
    }
    gmHandler = ()=>{
        this.setState({"msg":"Good Mornig"})
    }
    gaHandler = ()=>{
        this.setState({"msg":"Good Afternoon"})
    }
    render(){
        console.log("First render() Method")
        return <div>
                <h3>Message Component</h3>
                
                <h3>Message Value:{this.state.msg}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
        
               </div>
    }
}
export default Message;