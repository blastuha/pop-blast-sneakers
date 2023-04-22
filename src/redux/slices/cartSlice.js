import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartData: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload
    },
  },
})

export const {} = cartSlice.actions

export default cartSlice.reducer
