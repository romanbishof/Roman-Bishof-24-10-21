import React, { useEffect, useState } from 'react';
// import Forcast from '../forcast/Forcast';
import axios from "axios"
import { getForcast, clearForcast } from '../../redux/slice/weatherSlice';
import { useDispatch, useSelector} from 'react-redux'
import './searchBar.scss'
const APIKEY = "COnrzLNo7bwnOd1Cn9BBITwDuwthSGF7"


const SearchBar = () => {

    const [location, setLocation] = useState('');
    
    const dispatch = useDispatch()
    
    // const searchBar = useSelector((state) => state.weatherForcast)
    const [searchBar, setSearchBar ] = useState('')

    const defaultCity = "tel-aviv"
    
    const getWeatherByLocation = async (location) => {
        let response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${location}`)
        let objArray = response.data
        objArray.forEach(async (obj) => {
            let res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${obj.Key}?apikey=${APIKEY}`)
            let weather = res.data
            let weatherData = {
                special: false,
                cityKey: obj.Key,
                weatherCategory: weather.Headline.Category,
                weatherMood: weather.Headline.Text,
                country: obj.Country.LocalizedName,
                cityName: obj.LocalizedName,
                forcast: weather.DailyForecasts
            }
            dispatch(getForcast(weatherData))
        })

    }
    const defaultFunc =async () =>{
        let res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${defaultCity}`)
    let defaultWeather = res.data
    defaultWeather.forEach(async (obj) => {
        let res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${obj.Key}?apikey=${APIKEY}`)
        let weather = res.data
        let weatherData = {
            special: false,
            cityKey: obj.Key,
            weatherCategory: weather.Headline.Category,
            weatherMood: weather.Headline.Text,
            country: obj.Country.LocalizedName,
            cityName: obj.LocalizedName,
            forcast: weather.DailyForecasts
        }

        dispatch(getForcast(weatherData))

    })
    }

    const getWeatherByCity = async () => {
        let cityName = localStorage.getItem('cityName')
        let response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${cityName}`)
        let objArray = response.data
        objArray.forEach(async (obj) => {
            let res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${obj.Key}?apikey=${APIKEY}`)
            let weather = res.data
            let weatherData = {
                special: true,
                cityKey: obj.Key,
                weatherCategory: weather.Headline.Category,
                weatherMood: weather.Headline.Text,
                country: obj.Country.LocalizedName,
                cityName: obj.LocalizedName,
                forcast: weather.DailyForecasts
            }
            dispatch(getForcast(weatherData))
        })

        localStorage.removeItem('cityName')
           
    }
        
    useEffect( () => {
        let temp =  localStorage.getItem("cityName")
        if (!temp) {
            defaultFunc();
            
        } else {
            getWeatherByCity()
        }
        
    },[])


    const onsubmit = (e) => {
        e.preventDefault()
        if(!location || location === ''){
            return;
        }
        else{
            dispatch(clearForcast())
            getWeatherByLocation(location)
        }
    }


    return (
        <div className="search">
            <form className="container" onSubmit={onsubmit}>
                <input type="text" 
                className="searchInput" 
                placeholder="Search for location"
                onChange={(e)=> {
                    setLocation(e.target.value)
                }} 
                />
                <button className="button" onClick={onsubmit}>SEARCH</button>
            </form>
        </div>
    );
};

export default SearchBar;