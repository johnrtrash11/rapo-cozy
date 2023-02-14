import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slices/cartSlice";
import productsSlice from "../Slices/products-slice";



export const store = configureStore({
    reducer :{
        products : productsSlice,
        cart :cartSlice,
    }
})