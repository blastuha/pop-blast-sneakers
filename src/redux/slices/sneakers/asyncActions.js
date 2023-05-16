import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakersStatus',
  async (params) => {
    const { brandFilter, shoesTypeFilter, sexFilter } = params
    const { data } = await axios.get(
      `https://63fcd20c859df29986c57847.mockapi.io/sneakerpal?${brandFilter}${shoesTypeFilter}${sexFilter}`
    )
    console.log(data)
    return data
  }
)
