import { FavoriteBorder, LocationCity } from '@material-ui/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../redux/slice/weatherSlice';
import './forcast.scss'


const Forcast = () => {

    const dispatch = useDispatch()
    const weatherData = useSelector((state) => state.weatherForcast)
    // console.log(weatherData);

    const dateBuilder = (d) => {
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let day = days[d.getDay()]
        let date = d.getDate()

        return `${day} ${date} ` 
    }

    const addFavorite = (payload) => {
        dispatch(addToFavorites(payload))
    }
    const removeFavoriteLocation = (key) => {
        dispatch(removeFromFavorites(key))
    }

    let listForcast;
    try {
        listForcast = weatherData.forcast.forcast.map((day, index) =>{  
            return(
                <div className="forcastDay" key={index}>
                    {dateBuilder(new Date(day.Date))}
                    {day.Day.IconPhrase} {day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}
                </div>
            )
        })
    } catch (error) {
        setTimeout(() => {
            console.log("loading data");
        }, 2000);
    }

    
    return (
        <div className="Forcast">
            <div className="wrapper">
                <div className="left">
                    <LocationCity className="cityIcon"/>
                    {weatherData.forcast.cityName}
                </div>
                <button className="right">
                    <FavoriteBorder className="favorite" onClick = {() => {
                        
                        if (!weatherData.favorites.some(alreadyFavorite => alreadyFavorite.cityKey === weatherData.forcast.cityKey)) {
                            addFavorite(weatherData.forcast)
                        } else {
                            removeFavoriteLocation(weatherData.forcast.cityKey)
                        }
                        
                    }}/>
                </button>
            </div>
            
            {listForcast}
        </div>
    );
};

export default Forcast;