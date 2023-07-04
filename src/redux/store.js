import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducers from "./reducers/productReducers";
import utilReducers from "./reducers/utilReducers";

export const store = configureStore({
  reducer: {
    product: productReducers,
    util: utilReducers,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
