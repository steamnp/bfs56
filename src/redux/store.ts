import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product-slice";
import userSlice from "./features/user-slice";
import counterSlice from "./features/counter";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userSlice,
    counter: counterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
