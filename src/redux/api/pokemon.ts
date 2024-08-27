import { createApi, fetchBaseQuery } from "redux.js/toolkit/query";

createApi([
    reducerPath: 'pokemonApi'
    baseQuery: fetchBaseQuery({baseUrl: 'https:/pokeapi.co/api/v2/'}),
    endpoints: (builder) => ([
        getPOkemonDatabyName: builder.query({
            query: (name) => 'pokemon/${name}'
        }
        )
    ])
]);
