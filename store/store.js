import { configureStore } from "@reduxjs/toolkit";

import navSlice from "./slices/navSlice";




export default  store = configureStore({
    reducer: {
        nav: navSlice.reducer,
    },

});
