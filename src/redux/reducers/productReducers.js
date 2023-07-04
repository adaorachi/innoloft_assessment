import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductDetail: (state, { payload }) => {
      state.productDetails = payload;
    },
  },
});

export const { getProductDetail } = productSlice.actions;

export default productSlice.reducer;
