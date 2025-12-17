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
      const {
        id,
        name,
        image,
        price,
        size,
        sugar,
        choice,
        temperature,
        quantity = 1,
      } = action.payload;

      // Use the cartItems array defined in initialState
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === id &&
          item.size === size &&
          item.sugar === sugar &&
          item.choice === choice &&
          item.temperature === temperature
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          id,
          name,
          image,
          price,
          size,
          sugar,
          choice,
          temperature,
          quantity,
        });
      }

      // Recalculate totals
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
    clearCart: (state, action) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, removeItemCompletely, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
