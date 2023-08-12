import { configureStore } from "@reduxjs/toolkit";
import categorySlice from '../Category/index';
import productSlice from '../Products/index';
import cartSlice from '../Cart/index';


export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice,
        productReducer : productSlice,
        cartReducer : cartSlice
    }
})