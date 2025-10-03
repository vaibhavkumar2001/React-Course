import React from "react";
import UserContext from "../context/UserContext";


function Login() {

    const [ username,setUsername] = React.useState('')
    const [password,setPassword ] = React.useState()

    //ab mujhe apne user context ko access krna hoga jisse me apne user ko set kr skun
    //iske liye me useContext hook ka use krunga
    //sabse pehle me apne UserContext ko import krunga
    const { setUser } = React.useContext(UserContext)

    const handleSubmit = (e) => {
        //isme me apne user ko set kr dunga
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}


export default Login;