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
            if(!state.forcast.some(alreadyForcast => alreadyForcast.cityKey === action.payload.cityKey)){
                let newPayload = {...action.payload, special: false}
                state.forcast.push(newPayload);
            }
        },
        addToFavorites:(state, action) => {
            
            if(!state.favorites.some(alreadyFavorite => alreadyFavorite.cityKey === action.payload.cityKey)){
                let newPayload = {...action.payload, special: true}
                state.favorites.push(newPayload);
            }
        },
        removeFromFavorites:(state, action) => {
            let newState =  state.favorites.filter(favoriteLocation => favoriteLocation.cityKey !== action.payload)
            state.favorites = newState
        },

        clearForcast:(state) =>{
            state.forcast = []
        }
    }
    
})

export const {getForcast, addToFavorites,removeFromFavorites,clearForcast} = weatherSlice.actions

export default weatherSlice.reducer