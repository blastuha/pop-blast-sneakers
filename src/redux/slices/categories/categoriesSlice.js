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

export const { setFiltredValue, clearAllFilters, setFilterWindowOpen } =
  categoriesSlice.actions

export default categoriesSlice.reducer
