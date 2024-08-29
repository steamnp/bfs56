import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API service
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Replace with your actual API base URL
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getAProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addToWhishList: builder.mutation({
      query: (prodId) => ({
        url: `/wishlist/${prodId}`,
        method: "POST",
      }),
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    getCart: builder.query({
      query: () => "/cart",
    }),
    deleteOneProductCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    emptyCart: builder.mutation({
      query: () => ({
        url: "/cart/empty",
        method: "POST",
      }),
    }),
    updateQuantityCart: builder.mutation({
      query: (cartDetails) => ({
        url: "/cart/update",
        method: "PUT",
        body: cartDetails,
      }),
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
    }),
    getOrders: builder.query({
      query: () => "/orders",
    }),
    writeReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
    }),
    getProductsOnQuery: builder.query({
      query: (query) => `/products/search?${query}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAProductQuery,
  useAddToWhishListMutation,
  useAddToCartMutation,
  useGetCartQuery,
  useDeleteOneProductCartMutation,
  useEmptyCartMutation,
  useUpdateQuantityCartMutation,
  useCreateOrderMutation,
  useGetOrdersQuery,
  useWriteReviewMutation,
  useGetProductsOnQueryQuery,
} = productsApi;

export default productsApi;
