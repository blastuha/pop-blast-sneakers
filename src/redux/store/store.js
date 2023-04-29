import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../slices/productSlice'
import alertsSlice from '../slices/alertsSlice'
import sneakersSlice from '../slices/sneakersSlice'
import cartSlice from '../slices/cartSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    alerts: alertsSlice,
    sneakers: sneakersSlice,
    cartData: cartSlice,
  },
})
