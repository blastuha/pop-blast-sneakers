import { createSlice } from '@reduxjs/toolkit'

const initialState = { inputValue: '' }

export const inputSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload
    },
  },
})

export const { setInputValue } = inputSlice.actions

export default inputSlice.reducer
