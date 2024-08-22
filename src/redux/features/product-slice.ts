import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: "Random Product",
  reducers: {},
});

export default productSlice.reducer;
