import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComponent() {
    return (
        <div>
            <p>Page not Found, click the button to go to the homescreen</p>
            <button><Link to="/">Home</Link></button>
        </div>
    )
}

export default ErrorComponent
