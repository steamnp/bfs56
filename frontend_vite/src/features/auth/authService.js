// src/features/auth/authService.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../../utils/base-url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

export const authApi = createApi({
  reducerPath: "authApi",
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
    loginUser: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => {
        localStorage.setItem("user", JSON.stringify(response));
        return response;
      },
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "user/register",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "user/user-edit",
        method: "PUT",
        body: data,
      }),
    }),
    getWishList: builder.query({
      query: () => ({
        url: "user/wishlist/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserMutation,
  useGetWishListQuery,
} = authApi;
