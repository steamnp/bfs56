import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase: (currentState) => {
      return currentState + 1;
    },
    decrease: (currentState) => {
      if (currentState > 0) {
        return currentState - 1;
      }

      return currentState;
    },
    increaseByFive: (currentState, action) => {
      return currentState + action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increase, decrease, increaseByFive } = counterSlice.actions;
