import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, _) => {
      state.count += 1;
    },

    decrement: (state, _) => {
      state.count -= 1;
    },

    setByValue: (state, action) => {
      console.log(action);
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setByValue } = counterSlice.actions;
export default counterSlice.reducer;
