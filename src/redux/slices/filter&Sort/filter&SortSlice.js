import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filtredValue: '',
  sortValue: '',
  selectedOption: 0,
  filterWindowOpen: false,
  mobileSortingOpen: false,
}

export const filterSortSlice = createSlice({
  name: 'filterSort',
  initialState,
  reducers: {
    setFiltredValue: (state, action) => {
      state.filtredValue = action.payload
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
    setFilterWindowOpen: (state, action) => {
      state.filterWindowOpen = action.payload
    },
    setMobileSortingOpen: (state, action) => {
      state.mobileSortingOpen = action.payload
    },
    onChangeMobileSorting: (state) => {
      state.mobileSortingOpen = !state.mobileSortingOpen
    }
  },
})

export const {
  setFiltredValue,
  clearAllFilters,
  setFilterWindowOpen,
  setSelectedOption,
  setMobileSortingOpen,
  onChangeMobileSorting
} = filterSortSlice.actions

export default filterSortSlice.reducer
