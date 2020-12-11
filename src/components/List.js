import React from 'react';
import User from './User';
import {Table} from "react-bootstrap";

const List = ({users, index}) => {

    return (
        <Table className="tableUsers" striped hover>
            <tbody>
            {users.map(
                (user, i) => {
                    return <User key={i} id={index++} currentUser={user} />

                })
            }
            </tbody>
        </Table>
    );
};

export default List;
