import Profile from './Profile'
let User = ()=>{
    let user_Details={
        uid:101,
        uname:"Rahul",
        email:'RG@gmail.com'
    }
    return <div>
                <h4>User Component</h4>
                <pre>{JSON.stringify(user_Details)}</pre>
                <hr/>
                <Profile  user={user_Details} one={1}/>
           </div>
}
export default User;