import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addMessageStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addMessageSuccess: (state, action) => {
      state.isFetching = false;
      state.messages.push(action.payload);
    },
    addMessageFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addMessageStart,
  addMessageSuccess,
  addMessageFailure,
} = messageSlice.actions;

export default messageSlice.reducer;
