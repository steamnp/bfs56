import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/product-slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
