import { createSlice } from '@reduxjs/toolkit'
import getStorageItems from '../../localStorage/cartLocal'

const initialState = {
  selectedSize: '',
  selectedColor: '',
  isInCart: false,
  cartData: getStorageItems() || [],
  sneakerQuantity: null,
  counter: 0,
}

export const productSlice = createSlice({
  name: 'product',
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
    setCartData: (state, action) => {
      state.cartData = action.payload
    },
    setSneakerQuantity: (state, action) => {
      state.sneakerQuantity = action.payload
    },
    // взаимодействие с корзиной
    addItem: (state, action) => {
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
    changeQuantity2: (state, action) => {
      console.log('action.payload', action)
      state.counter++
      console.log('counter', state.counter)
      //? получается требующийся индекс нужно снова записать в стейт?

      // if (action.payload.event.target.innerText === '+') {
      //   const newCartData = state.cartData.map((item, i) => {
      //     if (action.payload.itemIndex === i) {
      //       return { ...item, quantity: item.quantity + 1 }
      //     } else {
      //       return item
      //     }
      //   })
      //   state.cartData = newCartData
      // }
    },
  },
})

export const {
  setSelectedSize,
  setSelectedColor,
  setIsInCart,
  setCartData,
  setSneakerQuantity,
  addItem,
  deleteItem,
  changeQuantity2,
} = productSlice.actions

export default productSlice.reducer
