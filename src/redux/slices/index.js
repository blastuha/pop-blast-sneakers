import { alertsSlice } from './alert/alertsSlice'
import { cartSlice } from './cart/cartSlice'
import { filterSortSlice } from './filter&Sort/filter&SortSlice'
import { inputSlice } from './input/inputSlice'
import { fetchSneakers } from './sneakers/asyncActions'
import { mobileMenuSlice } from './mobileMenu/mobileMenuSlice'
import { favouritesSlice } from './favourites/favouritesSlice'

export const actions = {
  ...alertsSlice.actions,
  ...cartSlice.actions,
  ...filterSortSlice.actions,
  ...inputSlice.actions,
  ...mobileMenuSlice.actions,
  ...favouritesSlice.actions,
  fetchSneakers,
}
