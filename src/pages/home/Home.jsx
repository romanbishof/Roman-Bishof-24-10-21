import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/search/SearchBar';
import Forcast from '../../components/forcast/Forcast'
import "./home.scss"

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <SearchBar/>
            <Forcast/>
        </div>
    );
};

export default Home;