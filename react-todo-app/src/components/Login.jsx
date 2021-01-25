import React, {Component, useState} from 'react'

function Login(props) {
    //I use state to change the value's of the username and password which will later be implimented to create a functional login
    const [username, setUsername] = useState("Kevin");
    const [password, setPassword] = useState("todoapp");
    //This onChange handler is used to set the username field to whatever the user is typing in the username input box, some thing for the password field
    const handleUsernameChange = (event) => {console.log(event)
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {console.log(event.target.value)
        setPassword(event.target.value);
    };
    return (
        <>
           <span>Username:<input type="text" name="username" value={username} onChange={handleUsernameChange}></input></span>
           <span>Password:<input type="password" name="password" value={password} onChange={handlePasswordChange}></input></span>
           <button>Login</button> 
        </>
    )
}

export default Login
