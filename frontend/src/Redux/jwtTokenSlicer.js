import { createSlice } from '@reduxjs/toolkit';

function pushJwtToken(jwtToken) {
        return jwtToken
}
function decoder() {
    return [false] // этот переключатель отвечает за то авторизован ли пользователь, он меняет доступ к платформе
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