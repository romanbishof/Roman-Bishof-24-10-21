import React from 'react';
import './navbar.scss'
import {HomeRounded} from '@material-ui/icons';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://blog.herolo.co.il/wp-content/uploads/Herolo_Logo.png" 
                    alt=''/>
                </div>

                <div className="right">
                    <HomeRounded className="homePage"/>
                    <button className="favorites">Favorites</button>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;