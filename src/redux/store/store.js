import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlice'
import alertsSlice from '../slices/alertsSlice'
import sneakersSlice from '../slices/sneakersSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
    sneakers: sneakersSlice,
  },
})
