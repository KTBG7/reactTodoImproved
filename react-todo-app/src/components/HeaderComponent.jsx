import React from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import { logout, isUserLoggedIn } from './AuthenticationService.js'

function HeaderComponent() {
    
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="./" className="navbar-brand">Kevin</a></div>
                <ul className="navbar-nav">
                    {isUserLoggedIn() && <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>}
                    {isUserLoggedIn() && <li>
                        <Link className="nav-link" to="/todos">Todos</Link>
                    </li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {<li>
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>}
                    {isUserLoggedIn() && <li>
                        <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(HeaderComponent);
