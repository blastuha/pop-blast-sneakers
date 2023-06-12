import { createSlice } from '@reduxjs/toolkit'
import getStorageItems from '../../../utils/getStorageItems'

const initialState = {
  favourites: getStorageItems('favouritesData') || [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.selectedSize = action.payload
    },
    addToFavourites: (state, action) => {
      if (state.favourites.find((sneaker) => sneaker === action.payload)) {
        console.log('есть')
        return
      } else {
        state.favourites.push(action.payload)
        console.log('нету')
      }
    },
    deleteFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      )
    },
  },
})

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
