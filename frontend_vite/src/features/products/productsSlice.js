import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

// Async thunk to get a single product by ID
export const getAproduct = createAsyncThunk(
  "products/getAproduct",
  async (productId, thunkAPI) => {
    try {
      const response = await productApi.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await productApi.get("/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
    addToCart: (state, action) => {
      const product = action.payload;
      state.cart.push(product);
      state.isSuccess = true;
    },
    writeReview: (state, action) => {
      const { prodId, comment, star } = action.payload;
      const product = state.products.find((product) => product._id === prodId);
      if (product) {
        product.reviews.push({ comment, star });
        state.isSuccess = true;
      }
    },
    deleteOneProductCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product._id !== productId);
      state.isSuccess = true;
    },
    getCart: (state, action) => {
      state.cart = action.payload;
      state.isSuccess = true;
    },
    updateQuantityCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.cart.find((item) => item._id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
      state.isSuccess = true;
    },
    createOrder: (state, action) => {
      state.orders.push(action.payload);
      state.isSuccess = true;
    },
    emptyCart: (state) => {
      state.cart = [];
      state.isSuccess = true;
    },
    getOrders: (state, action) => {
      state.orders = action.payload;
      state.isSuccess = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAproduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAproduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(getAproduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
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

export const {
  addToCart,
  resetState,
  addToWhishList,
  writeReview,
  deleteOneProductCart,
  getCart,
  updateQuantityCart,
  createOrder,
  emptyCart,
  getOrders,
} = productsSlice.actions;
export default productsSlice.reducer;
