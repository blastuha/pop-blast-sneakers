import { createSlice } from '@reduxjs/toolkit'
import getStorageItems from '../../localStorage/cartLocal'

const initialState = {
  selectedSize: '',
  selectedColor: '',
  isInCart: false,
  cartData: getStorageItems() || [],
  sneakerQuantity: null,
  sneakerIndex: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // установка размера / цвета
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload
    },
    // в корзине ли товар с конкретным цветом и размером?
    setIsInCart: (state, action) => {
      state.isInCart = action.payload
    },
    // индекс кроссовка
    setSneakerIndex: (state, action) => {
      state.sneakerIndex = state.cartData.findIndex(
        (item) =>
          item.id === action.payload &&
          item.color === state.selectedColor &&
          item.size === state.selectedSize
      )
    },
    // взаимодействие с корзиной
    setCartData: (state, action) => {
      state.cartData = action.payload
    },
    addItemToCart: (state, action) => {
      const itemToAdd = {
        ...action.payload,
        quantity: 1,
        size: state.selectedSize,
        color: state.selectedColor,
      }
      state.cartData.push(itemToAdd)
    },
    deleteItem: (state, action) => {
      if (state.sneakerQuantity === 1) {
        state.cartData = state.cartData.filter(
          (item) => item.id !== action.payload
        )
      }
    },
    // взаимодействие с количеством товара
    setSneakerQuantity: (state, action) => {
      state.sneakerQuantity = action.payload
    },
    increaseQunatity: (state, action) => {
      console.log(action.payload)
      const sneakerToChange = state.cartData.find(
        (_, i) => i === action.payload
      )
      if (sneakerToChange) {
        sneakerToChange.quantity = sneakerToChange.quantity + 1
      }
    },
    decreaseQunaitty: (state, action) => {
      state.cartData.map((sneaker, i) => {
        if (i === action.payload && sneaker.quantity > 1) {
          return sneaker.quantity--
        } else {
          return sneaker
        }
      })
    },
  },
})

export const {
  setSelectedSize,
  setSelectedColor,
  setIsInCart,
  setCartData,
  setSneakerQuantity,
  addItemToCart,
  deleteItem,
  setSneakerIndex,
  increaseQunatity,
  decreaseQunaitty,
  addToCart2,
} = cartSlice.actions

// export const { actions } = cartSlice

export default cartSlice.reducer
