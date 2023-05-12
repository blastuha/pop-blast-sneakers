import { alertsSlice } from './alert/alertsSlice'
import { cartSlice } from './cart/cartSlice'
import { categoriesSlice } from './categories/categoriesSlice'
import { fetchSneakers } from './sneakers/asyncActions'

export const actions = {
  ...alertsSlice.actions,
  ...cartSlice.actions,
  ...categoriesSlice.actions,
  fetchSneakers,
}
