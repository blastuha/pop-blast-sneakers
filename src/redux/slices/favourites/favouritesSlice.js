import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: [],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const isSneakerInFavourite = state.favourites.find((sneaker) => {
        console.log(sneaker, action.payload)
        return sneaker.id === action.payload.id
      })
      console.log({
        action: action.payload,
        isSneakerInFavourite: isSneakerInFavourite,
      })

      if (isSneakerInFavourite) {
        return
      } else {
        state.favourites.push(action.payload)
      }
    },

    deleteFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const { addToFavourites, deleteFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer
