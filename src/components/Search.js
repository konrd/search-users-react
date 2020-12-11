import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, InputGroup} from 'react-bootstrap'

const Search = ({query, setQuery}) => {

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <InputGroup>
            <Form.Control className="search " value={query} onChange={handleSearch} type="text" name="search" placeholder="Поиск авторов по имени" />
            <div className="search-icon align-middle">
                <img src="/images/search.png" alt="asd"/>
            </div>
        </InputGroup>
    );
};

export default Search;
