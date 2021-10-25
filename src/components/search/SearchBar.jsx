import React, { useState } from 'react';
import Forcast from '../forcast/Forcast';
import axios from "axios"
import { getForcast } from '../../redux/slice/weatherSlice';
import { useDispatch} from 'react-redux'
import './searchBar.scss'

const SearchBar = () => {

    const [location, setLocation] = useState('');
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    
    const getWeatherByLocation = async (location) => {
        let response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=QJBO7cVITzwME3T85j5VUTQyiwFAlzs7&q=${location}`)
        let objArray = response.data
        objArray.forEach(async (obj) => {
            // console.log(obj.Key);
            let res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${obj.Key}?apikey=QJBO7cVITzwME3T85j5VUTQyiwFAlzs7`)
            let weather = res.data
            dispatch(getForcast(weather))
            console.log(weather);
            
        })
        
        
        
    }

    const onsubmit = (e) => {
        e.preventDefault()
        if(!location || location === ''){
            return;
        }
        else{
            getWeatherByLocation(location)
            
            // dispatch(getForcast(location))
        }
    }

    // console.log(data.DailyForecasts); array of 5 days

    // let forcast = data.DailyForecasts.map((day, index) => {

    //     return(
    //         <li key={index}>
    //             {day.Date} <br />
    //             {day.Temperature.Maximum.Value} <br />
                
    //         </li>
    //     )
    // })


    
    return (
        <div className="search">
            <form className="container" onSubmit={onsubmit}>
                <input type="text" 
                className="searchInput" 
                placeholder="Search for location"
                onChange={e=> setLocation(e.target.value)}/>
                <button className="button" onClick={onsubmit}>SEARCH</button>
            </form>

            <div className="forcast">
                
                <Forcast/>

            </div>

        </div>
    );
};

export default SearchBar;