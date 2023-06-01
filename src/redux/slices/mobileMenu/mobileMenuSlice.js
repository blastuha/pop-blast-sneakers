import { createSlice } from '@reduxjs/toolkit'

const initialState = { mobileMenuOpen: false }

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    setMobileOpen: (state, action) => {
      state.mobileMenuOpen = action.payload
    },
    handleMobileMenu: (state, action) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
      console.log(action.payload)
    },
  },
})

export const { setMobileOpen, handleMobileMenu } = mobileMenuSlice.actions

export default mobileMenuSlice.reducer
