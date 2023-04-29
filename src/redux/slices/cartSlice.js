import { createSlice } from '@reduxjs/toolkit'
import getStorageItems from '../../localStorage/cartLocal'

const initialState = { cartData: getStorageItems() || [] }

export const cartSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      console.log(action.payload)
      state.cartData = action.payload
    },
    // addItem: (state, action) => {

    // }
  },
})

export const { setCartData } = cartSlice.actions

export default cartSlice.reducer
