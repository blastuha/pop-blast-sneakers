import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedSize: '', selectedColor: '', isInCart: false }

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload
    },
    setIsInCart: (state, action) => {
      state.isInCart = action.payload
    },
  },
})

export const { setSelectedSize, setSelectedColor, setIsInCart } =
  productSlice.actions

export default productSlice.reducer
