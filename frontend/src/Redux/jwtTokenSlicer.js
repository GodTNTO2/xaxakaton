import { createSlice } from '@reduxjs/toolkit';

function pushJwtToken(jwtToken) {
        return jwtToken
}
function decoder() {
    return [true]
}


const jwtTokenSlicer = createSlice({
    name: 'jwtTokenSlicer',
    initialState: {
        jwtToken: false,
        decodeJwt: []
    },
    reducers: {
        addJwtToken(state, action) {
            state.jwtToken = pushJwtToken(action.payload)
        },
        decoderJwtToken(state, action){
            state.decodeJwt = decoder(action.payload)
        }
    },
   
})

export const {
    addJwtToken,
    decoderJwtToken,
} = jwtTokenSlicer.actions;

export default jwtTokenSlicer.reducer;