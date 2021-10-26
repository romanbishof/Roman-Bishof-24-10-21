import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

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
        },
        addToFavorites:(state, action) => {
            state.favorites.push(action.payload)
        }
    }
    
})

export const {getForcast, addToFavorites} = weatherSlice.actions

export default weatherSlice.reducer