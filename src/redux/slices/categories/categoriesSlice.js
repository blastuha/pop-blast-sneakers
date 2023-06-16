import { createSlice } from '@reduxjs/toolkit'

const initialState = { filtredValue: '' }

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setFiltredValue: (state, action) => {
      state.filtredValue = action.payload
      console.log(action.payload)
    },
    clearAllFilters: (state) => {
      state.filtredValue = ''
    },
  },
})

export const {
  onChangeBrand,
  onChangeShoesType,
  onChangeSex,
  clearAllFilters,
} = categoriesSlice.actions

export default categoriesSlice.reducer
