import { createSlice } from "@reduxjs/toolkit";
import { blogApi } from "./blogService"; // Import the blogApi

const initialState = {
  blogs: [],
  singleBlog: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(blogApi.endpoints.getBlogs.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        blogApi.endpoints.getBlogs.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.blogs = payload;
        }
      )
      .addMatcher(
        blogApi.endpoints.getBlogs.matchRejected,
        (state, { error }) => {
          state.isLoading = false;
          state.isError = true;
          state.message = error.message;
        }
      )
      .addMatcher(blogApi.endpoints.getAblog.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        blogApi.endpoints.getAblog.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.singleBlog = payload;
        }
      )
      .addMatcher(
        blogApi.endpoints.getAblog.matchRejected,
        (state, { error }) => {
          state.isLoading = false;
          state.isError = true;
          state.message = error.message;
        }
      );
  },
});

export default blogSlice.reducer;
