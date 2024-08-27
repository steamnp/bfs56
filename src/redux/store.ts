import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product-slice";

import { pokemonApi } from "./api/pokemon";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
