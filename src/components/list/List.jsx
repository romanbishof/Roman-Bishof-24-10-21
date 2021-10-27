// import axios from 'axios';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {removeFromFavorites} from '../../redux/slice/weatherSlice'

const List = () => {

    const dispatch = useDispatch()

    const favoritesWeatherLocation = useSelector((state) => state.weatherForcast.favorites)
    console.log(favoritesWeatherLocation);

    const removeFavoriteLocation = (key) => {
        dispatch(removeFromFavorites(key))
    }
    
    const goToForcast = (cityName) => {
        localStorage.setItem("cityName", `${cityName}`)
    }


    let favorite = favoritesWeatherLocation.map((locationObj, index) => {
        console.log(locationObj);
        
        return (
            <div key={index} onClick={()=> {goToForcast(locationObj.cityName)}}>
                <Link to="/">
                    <li>
                        {locationObj.cityName} <br />
                        {locationObj.forcast[0].Day.IconPhrase} <br />
                        {locationObj.forcast[0].Temperature.Maximum.Value}
                        {locationObj.forcast[0].Temperature.Maximum.Unit} <br />
                    </li>
                </Link>
                <button onClick={()=>{ removeFavoriteLocation(locationObj.cityKey)} }>Remove from Favorites</button>

            </div>
        )
    })

    return (
        <div className="list">
            <ul className ="container">
                {favorite}
            </ul>
            
            
        </div>
    );
};

export default List;