import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import postSlice from "./postRedux/postSlice";
import CategorySlice from "./categoryRedux/categorySlice";
import ContractSlice from "./contractRedux/contractSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice,
        category : CategorySlice,
        contract : ContractSlice
    },

})

export default store