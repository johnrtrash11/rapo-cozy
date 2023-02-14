import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProduct=  createAsyncThunk('productsSlice/fetchProduct',async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = res.json();
    console.log(data);
    return data;
})

const productsSlice =  createSlice({
     initialState :[],
     name : 'productsSlice',
     reducers: {},
     extraReducers : (builder) => {
        builder.addCase(fetchProduct.fulfilled , (state, actions)=>{
             return actions.payload;
        })
     }
})

 export const  {}  =productsSlice.actions;
export default productsSlice.reducer;