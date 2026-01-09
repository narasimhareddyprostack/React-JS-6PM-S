import React from 'react'
//external styles
import './message.css'
//style object
let page_styles={
    color:"yellow"
}
const Message = () => {
  
    return <div>
            <h2>Message Component</h2>
            <button className='btn btn-success'>Test</button>
            <h3 style={{color:"red", fontSize:"30px"}}>GM - Inline CSS</h3>
            <h4 style={page_styles}>GA - internal css</h4>
            <p className='bg-blue'>Welcome to React JS-External/application</p>
            </div>
}

export default Message