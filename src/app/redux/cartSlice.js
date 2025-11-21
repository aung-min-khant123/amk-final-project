"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity = state.cartItems.reduce((t, i) => t + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (t, i) => t + i.price * i.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((i) => i.id !== id);
        }
      }

      
      state.totalQuantity = state.cartItems.reduce((t, i) => t + i.quantity, 0);
      state.totalPrice = state.cartItems.reduce(
        (t, i) => t + i.price * i.quantity,
        0
      );
    },
    removeItemCompletely: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find((item) => item.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, removeItemCompletely } =
  cartSlice.actions;
export default cartSlice.reducer;
