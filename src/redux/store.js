import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import shoppingListReducer from "./shoppingListSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    shoppingList: shoppingListReducer,
  },
});


