import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authService"; // Import your authApi
import { toast } from "react-toastify";

const initialState = {
  signedUpUser: null,
  loginedUser: null,
  updatedUser: null,
  wishlist: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register User
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, action) => {
          state.signedUpUser = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          toast.success("Signed Up Successfully");
        }
      )
      .addMatcher(authApi.endpoints.registerUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        authApi.endpoints.registerUser.matchRejected,
        (state, action) => {
          state.signedUpUser = null;
          state.isError = true;
          state.isSuccess = false;
          state.isLoading = false;
          state.message = action.error.message;
          toast.error("Something went wrong", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      )
      // Login User
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, action) => {
          state.loginedUser = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          toast.success("Login Successful", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      )
      .addMatcher(authApi.endpoints.loginUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, action) => {
          state.loginedUser = null;
          state.isError = true;
          state.isSuccess = false;
          state.isLoading = false;
          state.message = action.error.message;
          toast.error("Something went wrong during login", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      )
      // Update User
      .addMatcher(
        authApi.endpoints.updateUser.matchFulfilled,
        (state, action) => {
          state.updatedUser = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          toast.success("Profile Updated");
        }
      )
      .addMatcher(authApi.endpoints.updateUser.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        authApi.endpoints.updateUser.matchRejected,
        (state, action) => {
          state.updatedUser = null;
          state.isError = true;
          state.isSuccess = false;
          state.isLoading = false;
          state.message = action.error.message;
          toast.error("Something went wrong");
        }
      )
      // Get Wishlist
      .addMatcher(
        authApi.endpoints.getWishList.matchFulfilled,
        (state, action) => {
          state.wishlist = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(authApi.endpoints.getWishList.matchPending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(
        authApi.endpoints.getWishList.matchRejected,
        (state, action) => {
          state.wishlist = [];
          state.isError = true;
          state.isSuccess = false;
          state.isLoading = false;
          state.message = action.error.message;
        }
      );
  },
});

export default authSlice.reducer;
