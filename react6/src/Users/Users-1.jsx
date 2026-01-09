import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Users = () => {
  let [users,setUsers] = useState([])

  let get_UserData=()=>{
    console.log("Test 123")
    Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{
          console.log(resp.data);
          setUsers(resp.data)
         })
         .catch((err)=>{ console.log(err)})
  }
  useEffect(()=>{
    console.log("After Return St, useEffect will invoke")
  })
  return <div>
        <h3>User Component</h3>
        <pre>{JSON.stringify(users)}</pre>
        <button onClick={get_UserData}>Get User Data</button>
        <table className='table'>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          {
            users.length>0 ? <>Data</>:<>No Data</>
          }
          </tbody>
        </table>
        </div>
}

export default Users