import React from 'react'
import Login from './Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import ErrorComponent from '../components/ErrorComponent'
import ListTodosComponent from '../components/ListTodosComponent'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Logout from './Logout'

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
                <Route path="/logout" component={Logout}></Route>
                <Route path="/welcome/:name" component={Welcome}></Route>
                <Route path="/todos" component={ListTodosComponent}></Route>
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
