import {createSlice} from "@reduxjs/toolkit";
import {
    createContract,
    removeContract,
    showContracts, showContractsById,
    showContractsByUserCreate,
} from "../../service/contractService";

const initialState = {
    listContract: []
}

const contractSlice = createSlice({
    name: 'contract',
    initialState,
    extraReducers: builder => {
        builder.addCase(showContracts.fulfilled, (state, action) => {
            state.listContract = [...action.payload]
        })
        builder.addCase(createContract.fulfilled, (state, action) => {
            state.listContract.push(action.payload)
        })
        builder.addCase(showContractsByUserCreate.fulfilled, (state, action) => {
            state.listContract = [...action.payload]
        })
        builder.addCase(showContractsById.fulfilled, (state, action) => {
            state.listContract = [...action.payload]
        })
        builder.addCase(removeContract.fulfilled, (state, action) => {
            state.listContract = state.listContract.filter(item => item.id !== action.payload)
        })
    }
})
export default contractSlice.reducer