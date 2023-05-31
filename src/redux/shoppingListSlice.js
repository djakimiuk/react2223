import { createSlice } from "@reduxjs/toolkit";

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    list: [],
    selectedProduct: null,
  },
  reducers: {
    loadShoppingList: (state, value) => {
      state.list = value.payload;
    },
    setSelectedShoppingListProduct: (state, value) => {
      state.selectedProduct = value.payload;
    },
  },
});

export const { loadShoppingList, setSelectedShoppingListProduct } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
