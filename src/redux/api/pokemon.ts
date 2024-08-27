import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const pokemonApi({
    reducerpath: 'pokemonApi',
    baseQuery: fectchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonDataByName: builder.query({
            query: (name) => `pokemon/${name}`// -> `pokemon/${name}`, 
        }),
    }),
})
pokemonApi

