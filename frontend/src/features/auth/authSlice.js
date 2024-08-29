// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "./authService";
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

// For registering a user
export const registerUser = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.registerUser.initiate(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// For login as a user
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.loginUser.initiate(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Update user details
export const updateUser = createAsyncThunk(
  "user/update",
  async (data, thunkAPI) => {
    try {
      const response = await authApi.endpoints.updateUser.initiate(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// For fetching user wishlist
export const getwishlist = createAsyncThunk(
  "user/get-wishlist",
  async (_, thunkAPI) => {
    try {
      const response = await authApi.endpoints.getWishList.initiate();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.signedUpUser = null;
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        toast.error("Something went wrong");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.loginedUser = action.payload;
        toast.success("Login Successfull");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        toast.error(action.payload.message);
      })
      .addCase(getwishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getwishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getwishlist.rejected, (state, action) => {
        state.wishlist = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedUser = action.payload;
        toast.success("Profile Updated");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updatedUser = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = action.payload.message;
        toast.error("Something went wrong");
      });
  },
});

export default authSlice.reducer;
