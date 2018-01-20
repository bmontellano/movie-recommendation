import React from 'react';
import './Home.css';

const Home = ({tweets, handleSearch, updateSearchValue}) => {
    return (
        <div>
            <h1> {tweets} </h1>
            <p> hi </p>
            <div>
            <form onSubmit={(e) => handleSearch(e)}>
                <input type="search" placeholder="Username" onChange={updateSearchValue} />
            </form>
            </div>
        </div>
    )
}

export default Home;