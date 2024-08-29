import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productsSlice";
import blogReducer from "../features/blog/blogSlice";
import { productApi } from "../features/products/productsService"; // Import the product API slice
import { authApi } from "../features/auth/authService"; // Import the auth API slice
import { blogApi } from "../features/blog/blogService"; // Import the blog API slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    blogs: blogReducer,
    [productApi.reducerPath]: productApi.reducer, // Add product API slice reducer
    [authApi.reducerPath]: authApi.reducer, // Add auth API slice reducer
    [blogApi.reducerPath]: blogApi.reducer, // Add blog API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      authApi.middleware,
      blogApi.middleware // Add the blog API slice middleware
    ),
  devTools: process.env.NODE_ENV !== "production", // Enable devTools in development mode only
});

export default store;
