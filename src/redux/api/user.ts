// base url: https://backend.gorakhjoshi.com/api/user/all-users

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.gorakhjoshi.com/api/user",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.mutation({
      query: (userData) => ({
        url:'register',
        method:'POST',
         body:,
    }),
  }),
});

export const { getPokemonByNameQuery } = pokemonApi;
