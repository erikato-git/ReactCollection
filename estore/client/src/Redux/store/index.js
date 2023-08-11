import { configureStore } from "@reduxjs/toolkit";
import categorySlice from '../Category/index'


export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice
    }
})