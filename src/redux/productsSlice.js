import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    selectedProduct: {},
  },
  reducers: {
    loadProducts: (state, value) => {
      state.list = value.payload;
    },
    setSelectedProduct: (state, value) => {
      state.selectedProduct = value.payload;
    },
  },
});

export const { loadProducts, setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
