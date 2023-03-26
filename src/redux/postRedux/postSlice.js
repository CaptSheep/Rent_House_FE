import {createSlice} from "@reduxjs/toolkit";
import {
    createHome, editHome, removeHome,
    showHomesByCategory,
    showListHome,
    showYourHomes
} from "../../service/homeService";

const initialState = {
    listHome: [],
    detailHome: [],

}
const homeSlice = createSlice({
    name: 'home',
    initialState,

    extraReducers: builder => {
        builder.addCase(showListHome.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })

        builder.addCase(showYourHomes.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(showHomesByCategory.fulfilled, (state, action) => {
            state.listHome = [...action.payload]
        })
        builder.addCase(createHome.fulfilled, (state, action) => {
            state.listHome.push(action.payload)
        })
        builder.addCase(removeHome.fulfilled, (state, action) => {
            state.listHome = state.listHome.filter(item => item.id !== action.payload.id)
        })

        builder.addCase(editHome.fulfilled, (state, action) => {
            state.detailHome = [...action.payload]
        })

    }
})
export default homeSlice.reducer