import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data";

export interface CounterState {
  value: number;
}

export const productSlice = createSlice({
  name: "counter",
  initialState: data,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;
