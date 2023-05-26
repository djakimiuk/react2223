import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    selectedProduct: null,
  },
  reducers: {
    loadProducts: (state, value) => {
      state.list = value.payload;
    },
  },
});

export const { loadProducts } = productsSlice.actions;

export default productsSlice.reducer;
