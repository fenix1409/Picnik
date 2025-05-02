import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  counts: { [key: string]: number };
}

const initialState: ProductState = {
  counts: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.counts[id] = (state.counts[id] || 1) + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if ((state.counts[id] || 1) > 1) {
        state.counts[id] -= 1;
      }
    },
  },
});

export const { increment, decrement } = productSlice.actions;
export default productSlice.reducer;
