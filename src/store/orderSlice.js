import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../db/productsList";

const initialState = {
  products: productsList,
  orderedProducts: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProductToOrder: (state, action) => {
      state.orderedProducts = [...state.orderedProducts, action.payload];
    },
    removeProductFromOrder: (state, action) => {
      state.orderedProducts = state.orderedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearOrderedProducts: (state) => {
      state.orderedProducts = [];
    },
  },
});

export const {
  addProductToOrder,
  clearOrderedProducts,
  removeProductFromOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
