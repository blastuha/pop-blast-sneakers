import { useCallback } from 'react'
import { useSelector } from 'react-redux'

//Проверка, есть ли товар в корзине с конкретным цветом и размером, ищем его индекс
const useFindIndexInCart = (cartData) => {
  const selectedSize = useSelector((state) => state.product.selectedSize)
  const selectedColor = useSelector((state) => state.product.selectedColor)

  const findIndexInCart = useCallback(
    (id) => {
      const findIndex = cartData.findIndex(
        (item) =>
          item.id === id &&
          item.color === selectedColor &&
          item.size === selectedSize
      )
      return findIndex
    },
    [cartData, selectedColor, selectedSize]
  )
  return { findIndexInCart }
}

export default useFindIndexInCart
