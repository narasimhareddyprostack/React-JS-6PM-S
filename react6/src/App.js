import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Message from './message/Message'
import Navbar from './navbar/Navbar'
import Users from './Users/Users'
const App = () => {

 return <>
           {/*  <h3>App Component</h3> 
            <hr/>
         */}
            
            <Navbar/>
            <Users/>
            
        </>
}

export default App