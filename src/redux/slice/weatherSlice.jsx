import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'

// export const fetchWeatherAction = createAsyncThunk(
//     'weather/fetch', 
//     async () => {
        
//     } 
// )

const initialState = {
    forcast : [],
    favorites: []
}

export const weatherSlice = createSlice({
    name: "weatherForcast",
    initialState,
    reducers: {
        getForcast:(state, action) => { 
            // console.log(action.payload)
            state.forcast = action.payload
            // console.log(state.forcast)
        }
    }
    
})

export const {getForcast} = weatherSlice.actions

export default weatherSlice.reducer