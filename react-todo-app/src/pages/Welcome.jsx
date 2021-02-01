import React from 'react'
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
            {props.match.params.name} You can see your todos <Link to='/todos'>here</Link>
            </div>
        </>
    )
}

export default Welcome
