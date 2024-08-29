import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authService"; // Import your authApi
import { toast } from "react-toastify";

const initialState = {
  signedUpUser: null,
  loginedUser: null,
  updatedUser: null,
  wishlist: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Define any local reducers if needed
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addMatcher(
        authApi.endpoints.registerUser.matchFulfilled,
        (state, action) => {
          state.signedUpUser = action.payload;
          toast.success("Signed Up Successfully", {
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
      .addMatcher(
        authApi.endpoints.registerUser.matchRejected,
        (state, action) => {
          state.signedUpUser = null;
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
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, action) => {
          state.loginedUser = null;
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
          toast.success("Profile Updated", {
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
      .addMatcher(
        authApi.endpoints.updateUser.matchRejected,
        (state, action) => {
          state.updatedUser = null;
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
      // Get Wishlist
      .addMatcher(
        authApi.endpoints.getWishList.matchFulfilled,
        (state, action) => {
          state.wishlist = action.payload;
        }
      )
      .addMatcher(
        authApi.endpoints.getWishList.matchRejected,
        (state, action) => {
          state.wishlist = [];
        }
      );
  },
});

export default authSlice.reducer;
