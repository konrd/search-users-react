import React from 'react';
import User from './User';
import {Table} from "react-bootstrap";

const List = ({users, index, setSort}) => {

    const handleSort = (key) => {

        setSort(prev => key === prev.sortBy ? {...prev, desc: !prev.desc} : {active: true, desc: false, sortBy: key});
    };

    return (
        <Table className="tableUsers" striped hover>
            <thead>
                <tr className="sortBlock">
                    <td />
                    <td />
                    <td onClick={() => handleSort('name')}>sort</td>
                    <td />
                    <td onClick={() => handleSort('pageviews')}>sort</td>
                </tr>
            </thead>
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
