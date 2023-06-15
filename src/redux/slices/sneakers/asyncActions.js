import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSneakers = createAsyncThunk(
  'sneakers/fetchSneakersStatus',
  async (params) => {
    const { brandFilter, shoesTypeFilter, sexFilter } = params
    const { data } = await axios.get(
      `https://648ae01017f1536d65e9e1f9.mockapi.io/sneakers/?${brandFilter}${shoesTypeFilter}${sexFilter}`
    )

    return data
  }
)
