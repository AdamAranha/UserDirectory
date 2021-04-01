import React from 'react';
import Container from "./container";

function Table(props) {
    return (
        <Container>
            <table className="table table-striped mt-2">
                <thead>
                    <tr style={{ fontStyle: "italic" }}>
                        <th scope="col"></th>
                        <th scope="col">Name
                    <button style={{ border: 0, background: "white" }} onClick={props.sortName}>
                                <i className="fas fa-sort"></i>
                            </button>
                        </th>
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
                            <td className="align-middle">{user.name.first} {user.name.last}</td>
                            <td className="align-middle">{user.location.state}</td>
                            <td className="align-middle">{user.phone}</td>
                            <td className="align-middle">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Table;