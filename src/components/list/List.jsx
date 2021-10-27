// import axios from 'axios';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {removeFromFavorites} from '../../redux/slice/weatherSlice'

const List = () => {

    const dispatch = useDispatch()

    const favoritesWeatherLocation = useSelector((state) => state.weatherForcast.favorites)
    console.log(favoritesWeatherLocation);

    const removeFavoriteLocation = (key) => {
        dispatch(removeFromFavorites(key))
    }

    let favorite = favoritesWeatherLocation.map((locationObj, index) => {
        console.log(locationObj);
        // let response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationObj.cityKey}?apikey=QJBO7cVITzwME3T85j5VUTQyiwFAlzs7`)
        // let currentWeather = response.data
        // console.log(currentWeather[0]);
        
        
        return (
            <li key={index} >
                {locationObj.cityName} <br />
                {locationObj.forcast[0].Day.IconPhrase} <br />
                {locationObj.forcast[0].Temperature.Maximum.Value}
                {locationObj.forcast[0].Temperature.Maximum.Unit} <br />
                <button onClick={()=>{ removeFavoriteLocation(locationObj.cityKey)} }>Remove from Favorites</button>
            </li>
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