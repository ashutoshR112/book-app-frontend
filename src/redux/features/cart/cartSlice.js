import { createSlice } from '@reduxjs/toolkit';
import  Swal  from 'sweetalert2';

const initialState={
    cartItem : []
}

const cartSlice = createSlice({
name:'cart',
initialState : initialState,
reducers:{
    addToCart: (state,action)=>{
        const existing=state.cartItem.find(item=>item._id === action.payload._id);
        if(!existing){
        state.cartItem.push(action.payload);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item has added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }else{
            Swal.fire({
                title: "item is already added",
                text: "shame item ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              });
        }
    },
    removeFromCart: (state,action)=>{
        state.cartItem = state.cartItem.filter(item=>item._id !== action.payload._id);
    },
    clearCart: (state)=>{
        state.cartItem = [];
    }
}

})

export const {addToCart,removeFromCart,clearCart} =cartSlice.actions;

export default cartSlice.reducer;