import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobileMenuOpen: false,
  searchWindowOpen: false,
  mobileMenuSearchOpen: false,
  filterWindowOpen: false,
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
    setFilterWindowOpen: (state, action) => {
      state.filterWindowOpen = action.payload
    },
  },
})

export const {
  setMobileOpen,
  handleMobileMenu,
  setSearchWindowOpen,
  setMobileMenuSearchOpen,
  setFilterWindowOpen,
} = mobileMenuSlice.actions

export default mobileMenuSlice.reducer
