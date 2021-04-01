import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import axios from 'axios';
import Table from './table';

function TableContainer() {
    const [usersState, setUsersState] = useState([]);

    useEffect(() => {
        getPeople()
    }, []);

    async function getPeople() {
        API.getPeople().then(res => {
            setUsersState(res)
            console.log(usersState)
        })
    }

    function sortName() {
        console.log("sorting by name");

        const sorted = usersState.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            } else if (a.name.first > b.name.first) {
                return 1;
            } else {
                return 0;
            }
        });

        setUsersState([...sorted]);
    }

    return (
        <div>
            <Table
                list={usersState}
                sortName={sortName}
            />
        </div>
    )
}

export default TableContainer;