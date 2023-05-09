import { createSlice } from '@reduxjs/toolkit'
import { brands } from '../../data'
import { types } from '../../data'
import { sexArray } from '../../data'

const initialState = { brand: '', shoesType: '', sex: '' }

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    onChangeBrand: (state, action) => {
      brands.forEach((brandItem) => {
        if (action.payload === brandItem) {
          state.shoesType = ''
          state.sex = ''
          state.brand = action.payload
        }
      })
    },
    onChangeShoesType: (state, action) => {
      types.forEach((typeItem) => {
        if (action.payload === typeItem) {
          state.shoesType = action.payload
          state.sex = ''
          state.brand = ''
        }
      })
    },
    onChangeSex: (state, action) => {
      sexArray.forEach((sexItem) => {
        if (action.payload === sexItem) {
          state.shoesType = ''
          state.sex = action.payload
          state.brand = ''
        }
      })
    },
    clearAllFilters: (state) => {
      state.shoesType = ''
      state.sex = ''
      state.brand = ''
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
