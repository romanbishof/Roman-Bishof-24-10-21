import React from 'react';
import './navbar.scss'
import {HomeRounded} from '@material-ui/icons';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://blog.herolo.co.il/wp-content/uploads/Herolo_Logo.png" 
                    alt=''/>
                </div>

                <div className="right">
                    <Link to="/">
                        <HomeRounded className="homePage"/>
                    </Link>
                    
                    <Link to="/favorietes">
                        <button className="favorites">Favorites</button>
                    </Link>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;