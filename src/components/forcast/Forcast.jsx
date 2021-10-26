import { FavoriteBorder, LocationCity } from '@material-ui/icons';
import React from 'react';
import {useSelector} from 'react-redux'

const Forcast = () => {

    const weatherData = useSelector((state) => state.weatherForcast)
    console.log(weatherData)

    let listForcast = weatherData.forcast.forcast.map((day, index) =>{
        console.log(day);
        return(
            <li key={index}>
                Date: {new Date().toUTCString(day.Date)}
            </li>
        )
    })

    
    return (
        <div className="Forcast">
            <div className="left">
                <LocationCity className="cityIcon"/>
                {weatherData.forcast.cityName}
            </div>
            <div className="right">
                <FavoriteBorder className="favorite"/>
            </div>
            
            <ul>
                {listForcast}
            </ul>

            
            
        </div>
    );
};

export default Forcast;