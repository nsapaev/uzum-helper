import {createSlice} from "@reduxjs/toolkit";


const authReducer = createSlice({
    name: "auth",
    initialState: {
        auth: false
    },
    reducers: {
        authorization(state, action){

            if(action.payload.email === "admin@" && action.payload.password ==="12345678"){
                console.log(action)
                state.auth = true
            }

        }
    }
})

export const {authorization} = authReducer.actions
export default  authReducer.reducer
