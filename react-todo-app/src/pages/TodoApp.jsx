import React from 'react'
import Login from './Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import ErrorComponent from '../components/ErrorComponent'
import ListTodosComponent from '../components/ListTodosComponent'
import HeaderComponent from '../components/HeaderComponent'
import '../components/AuthenticationService.js'
import FooterComponent from '../components/FooterComponent'
import Logout from './Logout'
import AuthenticatedRoute from '../components/AuthenticatedRoute'
import TodoComponent from '../components/TodoComponent'

function TodoApp() {
    return (
        <div className="TodoApp">
            <Router>
                <>
                <HeaderComponent />
                {/*This switch statement is used to insure that only one of these paths are accessed at a time. This fixed the overlapping of the error component with all the other components*/}
                <Switch>
                <Route path="/"  exact component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <AuthenticatedRoute path="/logout" component={Logout}></AuthenticatedRoute>
                <AuthenticatedRoute path="/welcome/:name" component={Welcome}></AuthenticatedRoute>
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                <AuthenticatedRoute path="/todos" component={ListTodosComponent}></AuthenticatedRoute>
                <Route component={ErrorComponent}></Route>
                </Switch>
                <FooterComponent />
                </>
            </Router>
            {/*<Login />*/}
        </div>
    )
}

export default TodoApp
