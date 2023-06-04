import { createSlice } from "@reduxjs/toolkit";

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    list: [],
    selectedProduct: null,
    shoppingListLoadingStatus: "initial",
  },
  reducers: {
    loadShoppingList: (state, value) => {
      state.list = value.payload;
    },
    setSelectedShoppingListProduct: (state, value) => {
      state.selectedProduct = value.payload;
    },
    setshoppingListLoadingStatus: (state, value) => {
      state.shoppingListLoadingStatus = value.payload;
    },
  },
});

export const {
  loadShoppingList,
  setSelectedShoppingListProduct,
  setshoppingListLoadingStatus,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
