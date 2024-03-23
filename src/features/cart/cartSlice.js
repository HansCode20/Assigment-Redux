import { createSlice, isAllOf } from "@reduxjs/toolkit";
import cartItems from "./cartItems";

const initialState = {
  cartItems: [...cartItems],
  total: 0,
};
export const decreaseItemAmount = (id) => ({
  type: "cart/decreaseItemAmount",
  payload: id,
});

export const removeItem = (id) => ({
  type: "cart/removeItem",
  payload: id,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const totalPrice = state.cartItems.reduce(
        (total, item) => total + parseFloat(item.price * item.amount),
        0
      );
      state.total = totalPrice;
    },
    increaseItemAmount: (state, action) => {
      const updatecartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      state.cartItems = updatecartItems;
    },
    decreaseItemAmount: (state, action) => {
      const updatecartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });

      state.cartItems = updatecartItems;
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const {
  totalPrice,
  addToCart,
  removeFromCart,
  clearCart,
  increaseItemAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
