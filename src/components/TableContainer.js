import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import Table from './table';

function TableContainer() {
    const [peopleList, setpeopleList] = useState([]);
    const [order, setOrder] = useState('desc')
    const [input, setInput] = useState('')

    useEffect(() => {
        getPeople()
    }, []);

    async function getPeople() {
        API.getPeople().then(res => {
            setpeopleList(res)
            console.log(res)
        })
    }

    function sortFirstName() {
        let newList = [...peopleList]
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
        setpeopleList(newList);
    }

    function handleInputChange(event) {
        setInput(event.target.value)
        console.log(`[Input]`, input)
    }




    return (


        <div>
            <div class="input-group my-3 container">
                <input value={input} onChange={handleInputChange} type="text" class="form-control" placeholder="Enter Country Name" aria-label="Country Search" aria-describedby="button-addon2" />
                <button class="btn btn-outline-primary" type="button" id="button-addon2" >Search</button>
            </div>
            <Table
                list={peopleList}
                sort={sortFirstName}
            />
        </div>
    )
}

export default TableContainer;