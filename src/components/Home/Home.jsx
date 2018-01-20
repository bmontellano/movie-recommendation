import React from 'react';
import './Home.css';

import {Row, Input} from 'react-materialize';


const Home = ({tweets, handleSearch, updateSearchValue}) => {
    return (
        <div>
            <form onSubmit={(e) => handleSearch(e)}>
                <input type="search" placeholder="Enter username here..." onChange={updateSearchValue} />
            </form>
           
            <h1> {tweets} </h1>
        </div>
    )
}

export default Home;