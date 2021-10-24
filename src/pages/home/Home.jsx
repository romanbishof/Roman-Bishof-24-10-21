import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/search/SearchBar';
import "./home.scss"

const Home = () => {
    return (
        <div className="Home">
            <Navbar/>
            <SearchBar/>

        </div>
    );
};

export default Home;