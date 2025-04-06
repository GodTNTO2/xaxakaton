import { configureStore } from '@reduxjs/toolkit';
import jwtTokenSlicer from "./jwtTokenSlicer"

const store = 
    configureStore({
    reducer: {
        jwtToken: jwtTokenSlicer
    }
})

export default store