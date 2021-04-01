import React from 'react'

function Button(props) {
    return (
        <button className="btn btn-secondary">{props.name}</button>
    )
}

export default Button