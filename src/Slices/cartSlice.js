import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState:[],
    name :'cartSlice',
    reducers:{
        addToCart : (state,actions) =>  {
           const findProduct = state.find((product) => product.id === actions.payload.id);
           if(findProduct){
            findProduct.quantity+=1;
           }else{
            const productClone ={...actions.payload,quantity :1}
            
            state = state.push(productClone);
           }
            
        },
        removeFromCart : (state,actions) =>{
           
            return state.filter((product)=>  product.id !== actions.payload.id )
        },
        clear : () => { return []}
    },

})

export const {addToCart,removeFromCart,clear} = cartSlice.actions;
export default cartSlice.reducer;