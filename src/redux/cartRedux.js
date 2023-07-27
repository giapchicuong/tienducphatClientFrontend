import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    // total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find((item) => item._id === productToAdd._id);

      if (existingProduct) {
        // If the product already exists in the cart, just increment its quantity.
        existingProduct.quantity += 1;
      } else {
        // If it's a new product, add it to the cart with quantity 1.
        state.products.push({ ...productToAdd, quantity: 1 });
      }

      state.quantity += 1;
    },
    removeProduct: (state,action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
        );
      state.quantity -= 1;
      // state.total = state.products.reduce((a,i) => a + (i.quantity ) * i.price,0).toFixed(0);
    },
    reset: (state, action) => {
      state.products = [];
      state.quantity = 0;
      // state.total = 0;
    }
  },
});

export const { addProduct ,removeProduct,reset} = cartSlice.actions;
export default cartSlice.reducer;