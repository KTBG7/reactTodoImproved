import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {executeHelloWorldBeanService, executeHelloWorldService, executeHelloWorldPathService} from '../api/todo/HelloWorldService'

function Welcome(props) {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [beanMessage, setBeanMessage] = useState();

    function retrieveWelcomeMessage(){
        executeHelloWorldService()
        .then(response => handleSuccessfulResponse(response))
        //.catch()
    }
    function handleSuccessfulResponse(response){
        setWelcomeMessage(response.data);
    }

    function handleSuccessfulBeanResponse(response){
        setBeanMessage(response.data.message);
    }

    function retriveHelloWorldBean(){
        executeHelloWorldBeanService()
        .then(response => handleSuccessfulBeanResponse(response))
    }

    function retrieveHelloWorldPath(){
        executeHelloWorldPathService(props.match.params.name)
        .then(response => handleSuccessfulBeanResponse(response))
        .catch(error => handleError(error))
    }

    function handleError(error){
        console.log(error.data)
    }

    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                {props.match.params.name} You can see your todos <Link to='/todos'>here</Link>
            </div>
            <div className="container">
                Click Here for a customized welcome
                <button onClick={retrieveWelcomeMessage} className="btn btn-success">Get customized Message</button>
                <button onClick={retrieveHelloWorldPath} className="btn btn-success">Get Bean Message</button>
            </div>
            <div className="container">
                {welcomeMessage}
            </div>
            <div className="container">
                {beanMessage}
            </div>
        </>
    )
}

export default Welcome
