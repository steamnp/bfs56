import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Template literal -> `stringoftext${variable}`
//Creating an APi service
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { getPokemonByNameQuery } = pokemonApi;
