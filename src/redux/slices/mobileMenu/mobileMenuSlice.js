import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobileMenuOpen: false,
  searchWindowOpen: false,
  mobileMenuSearchOpen: false,
}

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    setMobileOpen: (state, action) => {
      state.mobileMenuOpen = action.payload
    },
    handleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setSearchWindowOpen: (state, action) => {
      state.searchWindowOpen = action.payload
    },
    setMobileMenuSearchOpen: (state, action) => {
      state.mobileMenuSearchOpen = action.payload
    },
  },
})

export const {
  setMobileOpen,
  handleMobileMenu,
  setSearchWindowOpen,
  setMobileMenuSearchOpen,
} = mobileMenuSlice.actions

export default mobileMenuSlice.reducer
