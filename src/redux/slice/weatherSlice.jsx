import {createSlice} from '@reduxjs/toolkit'

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

            if(!state.favorites.some(alreadyFavorite => alreadyFavorite.cityKey === action.payload.cityKey)){
                state.favorites.push(action.payload)
            }
        },
        removeFromFavorites:(state, action) => {
            let newState =  state.favorites.filter(favoriteLocation => favoriteLocation.cityKey !== action.payload)
            state.favorites = newState
        }
    }
    
})

export const {getForcast, addToFavorites,removeFromFavorites} = weatherSlice.actions

export default weatherSlice.reducer