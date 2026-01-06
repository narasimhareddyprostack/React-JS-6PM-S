let Profile = (props)=>{

    return <div>
            <h4>Profile Component</h4>
            <pre>{JSON.stringify(props)}</pre>
            <h4>User Id:{props.user.uid}</h4>
            <h4>User Name:{props.user.uname}</h4>
            <h4>User Email:{props.user.email}</h4>
          </div>
}
export default Profile;