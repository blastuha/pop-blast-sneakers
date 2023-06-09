import { createSlice } from '@reduxjs/toolkit'

const initialState = { globalInputValue: '' }

export const inputSlice = createSlice({
  name: 'globalInputValue',
  initialState,
  reducers: {
    setGlobalInputValue: (state, action) => {
      state.globalInputValue = action.payload
    },
  },
})

export const { setGlobalInputValue } = inputSlice.actions

export default inputSlice.reducer
