import { createSlice } from '@reduxjs/toolkit';

function pushJwtToken(jwtToken) {
    const token = JSON.parse(window.localStorage.getItem("token"))
    if (token) {
        return token
    }
    
    if (jwtToken){
        window.localStorage.setItem('token', jwtToken) 
        return jwtToken
    }
    
}


const jwtTokenSlicer = createSlice({
    name: 'jwtTokenSlicer',
    initialState: {
        jwtToken: false
    },
    reducers: {
        addJwtToken(state, action) {
            state.jwtToken = pushJwtToken(action.payload)
        },
    },
   
})

export const {
    addJwtToken,
} = jwtTokenSlicer.actions;

export default jwtTokenSlicer.reducer;