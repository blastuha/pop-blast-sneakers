import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const isSneakerInFavourite = state.favourites.find(
        (sneaker) => sneaker.id === action.payload.id
      )
      if (isSneakerInFavourite) {
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
