import { createSlice } from '@reduxjs/toolkit'

const initialState = { filtredValue: '', sortValue: '', selectedOption: 0 }

export const filterSort = createSlice({
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
} = filterSort.actions

export default filterSort.reducer
