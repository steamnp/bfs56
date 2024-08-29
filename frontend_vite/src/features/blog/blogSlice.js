import { createSlice } from "@reduxjs/toolkit";
import { blogApi } from "./blogService"; // Import the API service

const initialState = {
  blogs: [],
  singleBlog: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogsState: (state, action) => {
      state.blogs = action.payload;
    },
    setSingleBlogState: (state, action) => {
      state.singleBlog = action.payload;
    },
    setLoadingState: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorState: (state, action) => {
      state.isError = action.payload;
    },
    setSuccessState: (state, action) => {
      state.isSuccess = action.payload;
    },
    setMessageState: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(blogApi.endpoints.getBlogs.matchPending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addMatcher(
        blogApi.endpoints.getBlogs.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.blogs = action.payload;
        }
      )
      .addMatcher(blogApi.endpoints.getBlogs.matchRejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      })
      .addMatcher(blogApi.endpoints.getAblog.matchPending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addMatcher(
        blogApi.endpoints.getAblog.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.singleBlog = action.payload;
        }
      )
      .addMatcher(blogApi.endpoints.getAblog.matchRejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  },
});

export const {
  setBlogsState,
  setSingleBlogState,
  setLoadingState,
  setErrorState,
  setSuccessState,
  setMessageState,
} = blogSlice.actions;

export default blogSlice.reducer;
