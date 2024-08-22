import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.gorakhjoshi.com/api/user/",
  }),
  endpoints: (builder) => ({
    registerNewUser: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
      //
    }),
  }),
});

export const { useRegisterNewUserMutation } = userApi;
