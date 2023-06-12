import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cart/cartSlice'
import alertsSlice from '../slices/alert/alertsSlice'
import sneakersSlice from '../slices/sneakers/sneakersSlice'
import categoriesSlice from '../slices/categories/categoriesSlice'
import inputSlice from '../slices/input/inputSlice'
import mobileMenuSlice from '../slices/mobileMenu/mobileMenuSlice'
import favouritesSlice from '../slices/favourites/favouritesSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
    sneakers: sneakersSlice,
    categories: categoriesSlice,
    globalInputValue: inputSlice,
    mobileMenu: mobileMenuSlice,
    favourites: favouritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
