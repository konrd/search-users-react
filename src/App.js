import React, {useEffect, useState} from 'react';
import usersData from './data/data';
import Search from './components/Search';
import List from "./components/List";
import PaginationBlock from "./components/Pagination";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

    const [pagination, setPagination] = useState(
      {currentPage: 1, usersPerPage: 10}
    );
    const [results, setResults] = useState([]);
    const [sort, setSort] = useState({active: false, sortBy: '', desc: false});
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => { //Init users

        const topValues = [...usersData].sort((a, b) => b.pageviews < a.pageviews).slice(0,3);
        const users = usersData.map(user => {
            if(user.name === topValues[0].name){
                user.top = 1;
            }
            if(user.name === topValues[1].name){
                user.top = 2;
            }
            if(user.name === topValues[2].name){
                user.top = 3;
            }
            return user;
        });
        setResults(users);
    }, []);

    useEffect(() => { //Sort
        if(sort.active){
            sortBy(sort.sortBy, sort.desc);
        }
    }, [sort]);

    const sortBy = (key, order) => {

        const list = [...results].sort((a, b) =>
        {
            let value = 0;
            (a[key] > b[key]) ? value = 1 : value = -1;

            return (order === true) ? (value * -1) : value
        });
        setResults(list);
    };

    useEffect(() => { //Filter users by search query
        const usersFiltered = usersData.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        );
        setResults(usersFiltered);
    }, [searchQuery]);

    const {currentPage, usersPerPage} = pagination;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = results.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <div className="wrapper">
            <div className="container">
                <Search setQuery={setSearchQuery} query={searchQuery}/>
                {currentUsers.length ? (
                    <List setSort={setSort} users={currentUsers} index={indexOfFirstUser} />
                ) : <div className="emptyList">Ничего не найдено.</div>}


                {results.length >=  usersPerPage ? (
                <PaginationBlock {...pagination} setPagination={setPagination} usersCount={results.length}/>
                ) : ""}

            </div>
        </div>
    );
};

export default App;
