import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filteredList: [],
    selectedProduct: {},
    foodOnlyFilter: false,
    inputFilterValue: "",
  },
  reducers: {
    loadProducts: (state, value) => {
      state.list = value.payload;
    },
    setSelectedProduct: (state, value) => {
      state.selectedProduct = value.payload;
    },
    filterProducts: (state) => {
      let filteredList = state.list.filter((product) =>
        product.name.includes(state.inputFilterValue.toLocaleLowerCase())
      );
      if (state.foodOnlyFilter) {
        filteredList = filteredList.filter(
          (product) => product.isFood === true
        );
      }
      state.filteredList = filteredList;
    },
    setFoodOnlyFilter: (state, value) => {
      state.foodOnlyFilter = value.payload;
    },
    setInputFilter: (state, value) => {
      state.inputFilterValue = value.payload;
    },
  },
});

export const {
  loadProducts,
  setSelectedProduct,
  setFoodOnlyFilter,
  filterProducts,
  setInputFilter,
} = productsSlice.actions;

export default productsSlice.reducer;
