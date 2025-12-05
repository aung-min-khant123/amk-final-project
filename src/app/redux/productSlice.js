"use client"
import { createSlice } from "@reduxjs/toolkit";
import { products } from "@/app/data/coffeeData/data";

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: products, 
  },
  reducers: {}
});

export default productSlice.reducer;
