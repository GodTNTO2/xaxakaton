import { createSlice } from '@reduxjs/toolkit';

function jwtTokenGet() {
    return true
}

const jwtTokenSlicer = createSlice({
    name: 'jwtTokenSlicer',
    initialState: {
        jwtToken: false
    },
    reducers: {
        addJwtToken(state, action) {
            state.jwtToken = jwtTokenGet()
        },
    },
   
})

export const {
    addFavorite,
    addPending,
    deleteFavorite,
    deletePending,
} = jwtTokenSlicer.actions;

export default jwtTokenSlicer.reducer;