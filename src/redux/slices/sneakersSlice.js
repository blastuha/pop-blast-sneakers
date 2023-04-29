import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakersStatus',
  async (params) => {
    const { brandFilter, shoesTypeFilter, sexFilter } = params
    const response = await axios.get(
      `https://63fcd20c859df29986c57847.mockapi.io/sneakerpal?${brandFilter}${shoesTypeFilter}${sexFilter}`
    )
    return response.data
  }
)

const initialState = { sneakers: [], status: '' }
// status: loading | success | error

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setSneakers: (state, action) => {
      state.sneakers = action.payload
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.sneakers = []
      state.status = 'loading'
    },
    [fetchSneakers.fulfilled]: (state, action) => {
      state.sneakers = action.payload
      state.status = 'success'
    },
    [fetchSneakers.rejected]: (state) => {
      state.sneakers = []
      state.status = 'error'
      console.error('Ошибка при загрузке данных')
    },
  },
})

export const { setSneakers } = sneakersSlice.actions
// export const {actions, reducer} = sneakerSlice

export default sneakersSlice.reducer
