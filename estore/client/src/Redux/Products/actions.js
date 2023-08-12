import { createAsyncThunk } from "@reduxjs/toolkit"


export const getProducts = createAsyncThunk(
    'getProducts',
    () => {
        const products = fetch("http://localhost:5001/getProducts")
        .then((res) => res.json())
        return products
    }
)
