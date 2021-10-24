import React, { useState } from 'react';
import Forcast from '../forcast/Forcast';
import './searchBar.scss'

const SearchBar = () => {

    const [location, setLocation] = useState('');

    const onsubmit = (e) => {
        e.preventDefault()
        if(!location || location === ''){
            return;
        }
    }
    
    
    return (
        <div className="search">
            <form className="container" onSubmit={onsubmit}>
                <input type="text" 
                className="searchInput" 
                placeholder="Search for location"
                onChange={e=> setLocation(e.target.value)}/>
                <button className="button" onClick={onsubmit}>SEARCH</button>

            </form>

            <div className="forcast">
                <Forcast/>

            </div>

        </div>
    );
};

export default SearchBar;