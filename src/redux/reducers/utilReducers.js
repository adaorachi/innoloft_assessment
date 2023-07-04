import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appDetails: null,
  appDrawerState: false,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    getAppDetails: (state, { payload }) => {
      state.appDetails = payload;
    },
    getAppDrawerState: (state, { payload }) => {
      state.appDrawerState = payload;
    },
  },
});

export const { getAppDetails, getAppDrawerState } = utilSlice.actions;

export default utilSlice.reducer;
