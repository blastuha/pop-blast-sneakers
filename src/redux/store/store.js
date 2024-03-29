import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartSlice from '../slices/cart/cartSlice'
import alertsSlice from '../slices/alert/alertsSlice'
import sneakersSlice from '../slices/sneakers/sneakersSlice'
import inputSlice from '../slices/input/inputSlice'
import mobileMenuSlice from '../slices/mobileMenu/mobileMenuSlice'
import favouritesSlice from '../slices/favourites/favouritesSlice'
import filterSortSlice from '../slices/filter&Sort/filter&SortSlice'

const rootReducer = combineReducers({
  cart: cartSlice,
  alerts: alertsSlice,
  sneakers: sneakersSlice,
  filterSort: filterSortSlice,
  globalInputValue: inputSlice,
  mobileMenu: mobileMenuSlice,
  favourites: favouritesSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'favourites'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
