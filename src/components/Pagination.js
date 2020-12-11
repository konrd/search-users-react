import React from "react";
import {Pagination} from 'react-bootstrap'

const PaginationBlock = ({setPagination, usersCount, usersPerPage, currentPage}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(usersCount / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClickPage = (e) => {
        setPagination(prevData => (
                {...prevData, currentPage: Number(e.target.id)}
            )
        );
    };

    return (
        <Pagination className="paginationBlock">
            {pageNumbers.map(number =>
                <Pagination.Item active={number === currentPage} key={number} id={number} onClick={handleClickPage}>
                    {number}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default PaginationBlock
