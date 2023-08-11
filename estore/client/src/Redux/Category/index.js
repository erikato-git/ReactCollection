import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
    categories: [],
    status: "idle",
    error: ""
}

// TODO: Check op på redux og reducers section

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers:{
        [getCategories.pending] : (state,action) => {
            state.status = "loading ..."
        },
        [getCategories.fulfilled] : (state,action) => {
            state.status = "Succes";
            state.categories = action.payload;
        },
        [getCategories.rejected] : (state,action) => {
            state.status = "Failed";
            state.error = action.error.message;
        }
    }
})

export default categorySlice.reducer;

