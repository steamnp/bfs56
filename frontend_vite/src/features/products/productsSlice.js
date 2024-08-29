import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "./productsService"; // Updated import with correct file name

const initialState = {
  products: [],
  product: null,
  cart: [],
  wishlist: [],
  orders: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    addToWhishList: (state, action) => {
      state.wishlist.push(action.payload);
      state.isSuccess = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productApi.endpoints.getProducts.matchFulfilled,
        (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.getAProduct.matchFulfilled,
        (state, action) => {
          state.product = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.getCart.matchFulfilled,
        (state, action) => {
          state.cart = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.getOrders.matchFulfilled,
        (state, action) => {
          state.orders = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.getProductsOnQuery.matchFulfilled,
        (state, action) => {
          state.products = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.addToCart.matchFulfilled,
        (state, action) => {
          state.cart.push(action.payload);
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.addToWhishList.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.createOrder.matchFulfilled,
        (state, action) => {
          state.orders.push(action.payload);
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.writeReview.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(
        productApi.endpoints.deleteOneProd.matchFulfilled,
        (state, action) => {
          state.cart = state.cart.filter((item) => item.id !== action.meta.arg);
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
        }
      )
      .addMatcher(productApi.endpoints.emptyCart.matchFulfilled, (state) => {
        state.cart = [];
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      });
  },
});

export const { resetState, addToWhishList } = productsSlice.actions;
export default productsSlice.reducer;
