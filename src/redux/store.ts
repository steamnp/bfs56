import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product-slice'
import userReducer from './features/user-slice'
import couterReducer from './features/counter'
import { pokemonApi } from './api/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './api/user'

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    counter: couterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware, userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
