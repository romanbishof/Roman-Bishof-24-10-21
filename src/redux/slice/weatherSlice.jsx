import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    forcast : []

}

export const weatherSlice = createSlice({
    name: "weatherForcast",
    initialState,
    reducers: {
        getForcast:(state, action) => {
            
            action.payload.DailyForecasts.forEach(day => {
                console.log(day);
            })
            

        }
    }
    
})

export const {getForcast} = weatherSlice.actions

export default weatherSlice.reducer