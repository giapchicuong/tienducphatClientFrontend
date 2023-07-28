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
      // Calculate total while adding the product
      // state.total = state.products.reduce((a, i) => a + i.quantity * i.price, 0).toFixed(0);
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex((item) => item._id === action.payload);
      if (index !== -1) {
        // Update the quantity by subtracting the quantity of the removed product
        state.quantity -= state.products[index].quantity;
        // Use Immer's update function to remove the product at the given index
        state.products.splice(index, 1);
        // Calculate total while removing the product
        // state.total = state.products.reduce((a, i) => a + i.quantity * i.price, 0).toFixed(0);
      }
    },
    reset: (state, action) => {
      state.products = [];
      state.quantity = 0;
      // state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
