// store.js or store/index.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productsSlice";
import blogReducer from "../features/blog/blogSlice";
import { productsApi } from "../features/products/productsService";
import { blogApi } from "../features/blog/blogService";
import { authApi } from "../features/auth/authService"; // Import authApi slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    blogs: blogReducer,
    [productsApi.reducerPath]: productsApi.reducer, // Add productsApi reducer
    [blogApi.reducerPath]: blogApi.reducer, // Add blogApi reducer
    [authApi.reducerPath]: authApi.reducer, // Add authApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      blogApi.middleware,
      authApi.middleware
    ), // Add all API middlewares
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in development
});
