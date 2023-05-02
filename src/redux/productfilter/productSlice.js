// productSlice.js

import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

export const productSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    deleteProduct: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((product) => product.id === id);
      state.splice(index, 1);
    },
  },
});

export const { deleteProduct } = productSlice.actions;

export default productSlice.reducer;
