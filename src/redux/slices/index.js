import { alertsSlice } from './alert/alertsSlice'
import { cartSlice } from './cart/cartSlice'
import { categoriesSlice } from './categories/categoriesSlice'
import { inputSlice } from './input/inputSlice'
import { widthSlice } from './width/widthSlice'
import { fetchSneakers } from './sneakers/asyncActions'

export const actions = {
  ...alertsSlice.actions,
  ...cartSlice.actions,
  ...categoriesSlice.actions,
  ...inputSlice.actions,
  ...widthSlice.actions,
  fetchSneakers,
}
