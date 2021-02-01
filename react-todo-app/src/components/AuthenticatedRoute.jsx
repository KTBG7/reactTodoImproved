import React from 'react'
import { isUserLoggedIn } from './AuthenticationService.js'
import {Route, Redirect} from 'react-router-dom'


function AuthenticatedRoute(props) {
    if(isUserLoggedIn()){
        return <Route {...props}/>
    }else{
       return <Redirect to="/login" />
    }
}

export default AuthenticatedRoute
