import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product/",
    }),
    getAProduct: builder.query({
      query: (id) => `product/${id}`,
    }),
    addToWhishList: builder.mutation({
      query: (productId) => ({
        url: "product/addtowishlist/",
        method: "PUT",
        body: { prodId: productId },
      }),
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "user/cart/",
        method: "POST",
        body: data,
      }),
    }),
    getCart: builder.query({
      query: () => "user/cart",
    }),
    deleteOneProd: builder.mutation({
      query: (id) => ({
        url: `user/delete/${id}`,
        method: "DELETE",
      }),
    }),
    emptyCart: builder.mutation({
      query: () => ({
        url: "user/empty-cart",
        method: "DELETE",
      }),
    }),
    updateQuantityCart: builder.mutation({
      query: (cartDetails) => ({
        url: `user/update-cart/${cartDetails.cartItemId}/${cartDetails.quantity}`,
        method: "PUT",
      }),
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "user/cart/create-order",
        method: "POST",
        body: orderData,
      }),
    }),
    getOrders: builder.query({
      query: () => "user/get-orders",
    }),
    writeReview: builder.mutation({
      query: (data) => ({
        url: "product/rating",
        method: "PUT",
        body: data,
      }),
    }),
    getProductsOnQuery: builder.query({
      query: (query) => {
        const filteredQuery = Object.keys(query)
          .filter((key) => query[key] !== null && query[key] !== undefined)
          .map((key) => `${key}=${encodeURIComponent(query[key])}`)
          .join("&");
        return `product/get?${filteredQuery}`;
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAProductQuery,
  useAddToWhishListMutation,
  useAddToCartMutation,
  useGetCartQuery,
  useDeleteOneProdMutation,
  useEmptyCartMutation,
  useUpdateQuantityCartMutation,
  useCreateOrderMutation,
  useGetOrdersQuery,
  useWriteReviewMutation,
  useGetProductsOnQueryQuery,
} = productApi;
