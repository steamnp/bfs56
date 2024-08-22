import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Template Literal -> ${} // you can use template literal only inside string
// "", '', ``

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`, // -> 'pokemon/abc'
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
