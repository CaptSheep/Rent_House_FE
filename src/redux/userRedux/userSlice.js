import {createSlice} from "@reduxjs/toolkit";
import {changePassword, login, register, updateProfile} from "../../service/userService";

const initialState = {
    userNow: JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        removeAccount: (state)=>{
            state.userNow = null
        }

    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userNow = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.userNow = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        })
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.userNow = action.payload.user
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.userNow = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        })
    }
})
export const {removeAccount} = userSlice.actions
export default userSlice.reducer