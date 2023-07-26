import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.post(action.payload);
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.users = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
