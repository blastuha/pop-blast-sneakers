import { createSlice } from '@reduxjs/toolkit'
import { fetchSneakers } from './asyncActions'

const initialState = { sneakersList: [], fetchStatus: '' }

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.sneakersList = []
      state.fetchStatus = 'loading'
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.sneakersList = action.payload
      state.fetchStatus = 'success'
    },
    [fetchSneakers.rejected]: (state) => {
      state.sneakersList = []
      state.fetchStatus = 'error'
      console.error('Ошибка при загрузке данных')
    },
  },
})

export default sneakersSlice.reducer
