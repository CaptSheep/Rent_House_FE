import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import postSlice from "./postRedux/postSlice";
import CategorySlice from "./categoryRedux/categorySlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice,
        category : CategorySlice
    },

})

export default store