import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authApi } from "./authService"; // Import your authApi

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

// for registering a user
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.registerUser
        .initiate(data)
        .unwrap();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data || error.message);
    }
  }
);

// for logging in a user
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.loginUser
        .initiate(data)
        .unwrap();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data || error.message);
    }
  }
);

// for updating user details
export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.updateUser
        .initiate(data)
        .unwrap();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data || error.message);
    }
  }
);

// for fetching the user wishlist
export const getWishlist = createAsyncThunk(
  "user/getWishlist",
  async (_, thunkAPI) => {
    try {
      const response = await authApi.endpoints.getWishList.initiate().unwrap();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signedUpUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("Signed Up Successfully");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to register";
        toast.error("Something went wrong during registration");
      })

      // Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginedUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to login";
        toast.error("Something went wrong during login");
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updatedUser = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success("Profile Updated Successfully");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to update profile";
        toast.error("Something went wrong during profile update");
      })

      // Get Wishlist
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to fetch wishlist";
      });
  },
});

export default authSlice.reducer;
