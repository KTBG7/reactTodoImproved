import React from 'react'
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <div>
            Welcome, {props.match.params.name} You can see your todos here <button><Link to='/todos'>Todos</Link></button>
        </div>
    )
}

export default Welcome
