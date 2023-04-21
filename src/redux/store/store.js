import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../slices/productSlice'
import alertsSlice from '../slices/alertsSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    alerts: alertsSlice,
  },
})
