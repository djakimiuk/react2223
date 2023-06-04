import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filteredList: [],
    selectedProduct: null,
    foodOnlyFilter: false,
    inputFilterValue: "",
    activeProduct: 0,
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
      state.activeProduct = +filteredList[0].id
    },
    setFoodOnlyFilter: (state, value) => {
      state.foodOnlyFilter = value.payload;
    },
    setInputFilter: (state, value) => {
      state.inputFilterValue = value.payload;
    },
    setActiveProduct: (state, value) => {
      state.activeProduct = +value.payload;
    },
  },
});

export const {
  loadProducts,
  setSelectedProduct,
  setFoodOnlyFilter,
  filterProducts,
  setInputFilter,
  setActiveProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
