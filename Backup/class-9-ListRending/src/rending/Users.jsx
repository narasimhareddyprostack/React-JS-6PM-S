let Users=()=>{
    let employees=[
        {eid:101,ename:"Rahul",esal:45000.45},
        {eid:102,ename:"Sonia",esal:55000.45},
        {eid:103,ename:"Priyanka",esal:65000.45},
        {eid:104,ename:"Modi",esal:75000.45},
        {eid:105,ename:"Amith",esal:85000.45}
    ]
    return <div>
                <h4>User Component</h4>
                <hr />
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                    {
                     employees.map((emp,index)=>{
                        return <tr key={index}>
                                <td>{emp.eid}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.esal}</td>
                              </tr>
                     })
                    }
                    </tbody>
                </table>
            </div>
}
export default Users;