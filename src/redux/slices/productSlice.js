import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedSize: '', selectedColor: '' }

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
  },
})

export const { setSelectedSize, setSelectedColor } = productSlice.actions

export default productSlice.reducer
