import { FavoriteBorder, LocationCity } from '@material-ui/icons';
import React from 'react';
import {useSelector} from 'react-redux'

const Forcast = () => {

    const weatherData = useSelector((state) => state.weatherForcast)
    console.log(weatherData);
    const dateBuilder = (d) => {
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let day = days[d.getDay()]
        let date = d.getDate()

        return `${day} ${date} ` 
    }

    const addFavorite = () => {
        console.log("lest say added");
    }

    let listForcast;
    try {
        listForcast = weatherData.forcast.forcast.map((day, index) =>{
            console.log(day);
            return(
                <div key={index}>
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
            <div className="left">
                <LocationCity className="cityIcon"/>
                {weatherData.forcast.cityName}
            </div>
            <div className="right">
                <FavoriteBorder className="favorite" onClick = {addFavorite}/>
            </div>
            
            {listForcast}
        </div>
    );
};

export default Forcast;