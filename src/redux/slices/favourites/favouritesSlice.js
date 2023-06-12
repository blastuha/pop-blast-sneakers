import { createSlice } from '@reduxjs/toolkit'
import getStorageItems from '../../../utils/getStorageItems'

const initialState = {
  favourites: [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.selectedSize = action.payload
    },
    addToFavourites: (state, action) => {
      const itemToAdd = {
        ...action.payload,
        quantity: 1,
        size: state.selectedSize,
        color: state.selectedColor,
      }
      state.favourites.push(itemToAdd)
    },
    deleteFromFavourites: (state, action) => {
      if (action.payload.sneakerQuantity === 1) {
        state.favourites = state.favourites.filter(
          (item) => item.id !== action.payload.sneakerId
        )
      }
    },
  },
})

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
