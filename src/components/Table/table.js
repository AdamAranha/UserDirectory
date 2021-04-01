import React from 'react';

function Table(props) {
    return (
        <div className='container'>
            <table className="table table-striped mt-2">
                <thead>
                    <tr style={{ fontStyle: "italic" }}>
                        <th scope="col"></th>
                        <th scope="col">
                            First Name <i class="fas fa-sort" onClick={props.sort} ></i>
                        </th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {props.list.map(user => (
                        <tr key={user.login.uuid}>
                            <td className="align-middle text-center">
                                <img src={user.picture.medium} className="rounded-circle" alt="Employee Profile" />
                            </td>
                            <td className="align-middle">{user.name.first} </td>
                            <td className="align-middle">{user.name.last}</td>
                            <td className="align-middle">{user.location.country}</td>
                            <td className="align-middle">{user.phone}</td>
                            <td className="align-middle">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;