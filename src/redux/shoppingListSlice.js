import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

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
    addProductToShoppingList: (state, value) => {
      const content = value.payload;
      state.list.push({ ...content, shoppingListId: uniqueId() });
    },
  },
});

export const { loadShoppingList, addProductToShoppingList } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;
