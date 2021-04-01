import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import Table from './table';

function TableWrapper() {
    const [employeeList, setemployeeList] = useState([]);
    const [order, setOrder] = useState('desc')
    const [input, setInput] = useState('')

    useEffect(() => {
        getPeople()
    }, []);

    async function getPeople() {
        API.getPeople().then(res => {
            setemployeeList(res)
            console.log(res)
        })
    }

    function sortFirstName() {
        let newList = [...employeeList]
        newList.sort((a, b) => {
            let fa = a.name.first.toLowerCase(),
                fb = b.name.first.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        if (order === 'desc') {
            setOrder('asc')
            newList.reverse()
        } else {
            setOrder('desc')
        }
        setemployeeList(newList);
    }

    function handleInputChange(event) {
        setInput(event.target.value)
        console.log(`[Input]`, input)
    }

    function filter() {
        let queryArray
        queryArray = employeeList.filter(country => country.location.country.indexOf(input) > -1)
        setemployeeList(queryArray)
    }

    function reset() {
        getPeople()
    }


    return (
        <div>
            <div className="input-group my-3 container">
                <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={filter}>Search</button>
                <input value={input} onChange={handleInputChange} type="text" className="form-control" placeholder="Enter Country Name" aria-label="Country Search" aria-describedby="button-addon2" />

                <button className="btn btn-outline-danger" type="button" id="button-addon2" onClick={reset}> X </button>
            </div>
            <Table
                list={employeeList}
                sort={sortFirstName}
            />
        </div>
    )
}

export default TableWrapper;