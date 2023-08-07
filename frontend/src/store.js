import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../src/silces/apiSlice";
import cartSliceReducer from "./silces/CartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
