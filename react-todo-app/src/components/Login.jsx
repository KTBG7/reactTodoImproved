import React, {Component, useState} from 'react'

function Login(props) {
    //I use state to change the value's of the username and password which will later be implimented to create a functional login
    const [username, setUsername] = useState("Kevin");
    const [password, setPassword] = useState("todoapp");
    //This hasLoginFailed will allow me to record whether or not the user has succesfully logged in, if they aren't able to, I will display a message.
    const [hasLoginFailed, setHasLoginFailed] = useState('');
    //This  will allow me to see whether or not the div with the success meesage should be displayed.
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    //I updated the change to one, added an if else statement to check which input box is changed to then change the state of the correct input box.
    const handleChange = (event) => {console.log(event.target.name)
        if(event.target.name === "password"){
        setPassword(event.target.value);
        }else{
            setUsername(event.target.value);
        }
    };

    const loginClicked = () => {
        if(username === 'Kevin' && password === 'todoapp'){
            setHasLoginFailed(false)
            setShowSuccessMessage(true)
            console.log('Success')
        }else{
            setHasLoginFailed(true)
            console.log('Failed')
        }

    }
    return (
        <>
            <ShowInvalidCredentials hasLoginFailed={hasLoginFailed} />
            <ShowLoginSuccessMesssage showSuccessMessage={showSuccessMessage} />
           <span>Username:<input type="text" name="username" value={username} onChange={handleChange}></input></span>
           <span>Password:<input type="password" name="password" value={password} onChange={handleChange}></input></span>
           <button onClick={loginClicked}>Login</button> 
        </>
    )
}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    return null
}

function ShowLoginSuccessMesssage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null
}

export default Login
