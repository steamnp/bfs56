import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Adjust the base URL as needed
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getAProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getCart: builder.query({
      query: () => "/cart",
    }),
    getOrders: builder.query({
      query: () => "/orders",
    }),
    getProductsOnQuery: builder.query({
      query: (query) => `/products?${query}`,
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: "/cart",
        method: "POST",
        body: product,
      }),
    }),
    addToWhishList: builder.mutation({
      query: (product) => ({
        url: "/wishlist",
        method: "POST",
        body: product,
      }),
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
    }),
    writeReview: builder.mutation({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: review,
      }),
    }),
    deleteOneProd: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    emptyCart: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAProductQuery,
  useGetCartQuery,
  useGetOrdersQuery,
  useGetProductsOnQueryQuery,
  useAddToCartMutation,
  useAddToWhishListMutation,
  useCreateOrderMutation,
  useWriteReviewMutation,
  useDeleteOneProdMutation,
  useEmptyCartMutation,
} = productApi;
