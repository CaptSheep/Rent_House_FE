import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./userRedux/userSlice";
import postSlice from "./postRedux/postSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        post: postSlice,
    },

})

export default store