import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  count: number
}

const initialState: ProductState = {
  count: 1,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1
      }
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export const { increment, decrement, setCount } = productSlice.actions
export default productSlice.reducer