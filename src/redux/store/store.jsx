import { configureStore } from '@reduxjs/toolkit'
import weatherSliceReducer from '../slice/weatherSlice'

export const store = configureStore({
    reducer: {
        weatherForcast: weatherSliceReducer
    },
})