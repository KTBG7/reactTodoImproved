import React from 'react'
import Login from './Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import ErrorComponent from './ErrorComponent'

function TodoApp() {
    return (
        <div className="TodoApp">
            <Router>
                <>
                <Switch>
                <Route path="/"  exact component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/welcome" component={Welcome}></Route>
                <Route component={ErrorComponent}></Route>
                </Switch>
                </>
            </Router>
            {/*<Login />*/}
        </div>
    )
}

export default TodoApp
