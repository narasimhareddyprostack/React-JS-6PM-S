import React, { useEffect, useState } from 'react'
import Axios from 'axios';
const Users = () => {
  let [users,setUsers] = useState([])
  let get_UserData=()=>{
    console.log("Test 123")
    Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{  console.log(resp.data);
          setUsers(resp.data)
         })
         .catch((err)=>{ console.log(err)})
  }
  useEffect(()=>{  console.log("After Return St, useEffect will invoke");})
  return <div>
            <h3>User Component</h3>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={get_UserData}>Get User Data</button>
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                        <table className='table'>
                              <thead>
                                <tr className='bg-dark text-white'>
                                  <th>User Id</th>
                                  <th>Name</th>
                                  <th>Email Id</th>
                                  <th>City</th>
                                </tr>
                              </thead>
                              <tbody>
                              {
                                users.length>0 ? 
                                <>
                                {
                                  users.map((user)=>{
                                    return <tr>
                                          <td>{user.id}</td>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.address.city}</td>
                                          </tr>
                                  })
                                }          
                                </>:<>No Data</>
                              }
                              </tbody>
                        </table>
                    </div>
                  </div>
                </div>
        </div>
}

export default Users