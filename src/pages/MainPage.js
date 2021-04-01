import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Table from '../components/Table/Table';

function TableContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setPeople(API.getPeople())
    }, []);

    function sortName() {
        console.log("sorting by name");

        const sorted = people.sort((a, b) => {
            if (a.name.first < b.name.first) {
                return -1;
            } else if (a.name.first > b.name.first) {
                return 1;
            } else {
                return 0;
            }
        });

        setPeople([...sorted]);
    }

    return (
        <div>
            <Table
                list={people}
                sortName={sortName}
            />
        </div>
    )
}

export default TableContainer;