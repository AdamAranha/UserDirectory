import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import axios from 'axios';
import Table from './table';

function TableContainer() {
    const [usersState, setUsersState] = useState([]);
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        getPeople()
    }, []);

    async function getPeople() {
        API.getPeople().then(res => {
            setUsersState(res)
            console.log(res)
        })
    }

    function sortName() {
        let newList = [...usersState]
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
        setUsersState(newList);
    }

    return (
        <div>
            <Table
                list={usersState}
                sort={sortName}
            />
        </div>
    )
}

export default TableContainer;