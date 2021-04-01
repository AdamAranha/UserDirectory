import React from 'react'
import API from '../../utils/API'

function Button(props) {
    return (
        <button className="btn btn-primary" onClick={doWork}>{props.name}</button>
    )
}

function doWork() {
    let response = API.getStuff('Horse')
    console.log(response)
}

export default Button