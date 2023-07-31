import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // INCREASE VIEW COUNT
    increaseViewCountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    increaseViewCountSuccess: (state, action) => {
      state.isFetching = false;
      // Cập nhật lượt xem của sản phẩm trong danh sách sản phẩm
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload.productId) {
          return { ...product, viewCount: action.payload.viewCount };
        }
        return product;
      });
      state.products = updatedProducts;
    },
    increaseViewCountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // INCREASE RATING COUNT
    increaseRatingCountStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    increaseRatingCountSuccess: (state, action) => {
      state.isFetching = false;
      // Cập nhật lượt đánh giá của sản phẩm trong danh sách sản phẩm
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload.productId) {
          return { ...product, ratingCount: action.payload.ratingCount };
        }
        return product;
      });
      state.products = updatedProducts;
    },
    increaseRatingCountFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  increaseViewCountStart,
  increaseViewCountSuccess,
  increaseViewCountFailure,
  increaseRatingCountStart,
  increaseRatingCountSuccess,
  increaseRatingCountFailure,
} = productSlice.actions;

export default productSlice.reducer;
