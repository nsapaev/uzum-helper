import {createSlice} from "@reduxjs/toolkit";


const authReducer = createSlice({
    name: "auth",
    initialState: {
        auth: true
    },
    reducers: {
        authorization(state){
                state.auth = true
        }
    }
})

export const {authorization} = authReducer.actions
export default  authReducer.reducer
