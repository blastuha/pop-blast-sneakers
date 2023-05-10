import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cart/cartSlice'
import alertsSlice from '../slices/alertsSlice'
import sneakersSlice from '../slices/sneakersSlice'
import categoriesSlice from '../slices/categoriesSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
    sneakers: sneakersSlice,
    categories: categoriesSlice,
  },
})
