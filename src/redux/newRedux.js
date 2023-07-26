import { createSlice } from "@reduxjs/toolkit";

export const newSlice = createSlice({
  name: "new",
  initialState: {
    news: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getNewStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getNewSuccess: (state, action) => {
      state.isFetching = false;
      state.news = action.payload;
    },
    getNewFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getNewStart,
  getNewSuccess,
  getNewFailure,
} = newSlice.actions;

export default newSlice.reducer;
