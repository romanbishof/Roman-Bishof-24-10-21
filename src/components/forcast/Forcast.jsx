import { FavoriteBorder, LocationCity } from '@material-ui/icons';
import React from 'react';
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
        console.log(payload);
        dispatch(addToFavorites(payload))
    }
    const removeFavoriteLocation = (key) => {
        dispatch(removeFromFavorites(key))
    }

    let listForcast;
    try {

        listForcast = weatherData.forcast.map((cityForcast, index) => {

            return(
                <div className="wrapper" key={index}>
                    <div className="name">
                        <LocationCity className="cityIcon"/>
                        {cityForcast.cityName}
                    </div>

                    <button className="button">
                        <FavoriteBorder className="favorite" onClick={() => {

                            if (!weatherData.favorites.some(alreadyFavorite => alreadyFavorite.cityKey === weatherData.forcast.cityKey)) {
                                console.log(weatherData.forcast[index]);
                                addFavorite(weatherData.forcast[index])
                            } else {
                                removeFavoriteLocation(weatherData.forcast.cityKey)
                            }

                        }}/>
                    </button>

                    {cityForcast.forcast.map((day, index) => {
                        return(

                            <div className="forcastDay" key={index}>
                                {dateBuilder(new Date(day.Date))}
                                {day.Day.IconPhrase} {day.Temperature.Maximum.Value} {day.Temperature.Maximum.Unit}
                            </div>

                        )
                    })}
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
            {listForcast}
        </div>
    );
};

export default Forcast;