import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.gorakhjoshi.com/api/user/' }),
  endpoints: (builder) => ({
    // https://backend.gorakhjoshi.com/api/user/register
    registerNewUser: builder.mutation({
      query: (userData) => {
        console.log(userData)
        return {
          url: 'register',
          method: 'POST',
          body: userData,
        }
      },
    }),
  }),
})

export const { useRegisterNewUserMutation } = userApi
