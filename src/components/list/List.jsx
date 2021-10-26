import axios from 'axios';
import React from 'react';
import {useSelector} from 'react-redux'

const List = () => {

    const favoritesWeatherLocation = useSelector((state) => state.weatherForcast.favorites)
    console.log(favoritesWeatherLocation);

    let favorite = favoritesWeatherLocation.map((locationObj, index) => {
        console.log(locationObj);
        // let response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationObj.cityKey}?apikey=QJBO7cVITzwME3T85j5VUTQyiwFAlzs7`)
        // let currentWeather = response.data
        // console.log(currentWeather);
        
        
        return (
            <li key={index}>
                {locationObj.cityName} <br />
                {/* {currentWeather[0].Temperature.Metric.Value} <br /> <br />
                {currentWeather[0].WeatherText} */}
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