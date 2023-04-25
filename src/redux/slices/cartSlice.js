import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartData: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      console.log(action.payload)
      state.cartData = action.payload
    },
  },
})

export const { setCartData } = cartSlice.actions

export default cartSlice.reducer
