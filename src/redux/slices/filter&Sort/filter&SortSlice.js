import { createSlice } from '@reduxjs/toolkit'

const initialState = { filtredValue: '', sortValue: '', selectedOption: 0 }

export const filterSortSlice = createSlice({
  name: 'filterSort',
  initialState,
  reducers: {
    setFiltredValue: (state, action) => {
      state.filtredValue = action.payload
      console.log(action.payload)
    },
    clearAllFilters: (state) => {
      state.filtredValue = ''
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload
    },
  },
})

export const {
  setFiltredValue,
  clearAllFilters,
  setFilterWindowOpen,
  setSelectedOption,
} = filterSortSlice.actions

export default filterSortSlice.reducer
