import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { cart } from '../redux/slices/cart/selectors'
import useActions from './useActions'

const useIsSneakerInCart = (sneakerId) => {
  const [isInCart, setIsInCart] = useState(false)
  const { selectedColor, selectedSize, cartData, sneakerIndex } =
    useSelector(cart)
  const { setSneakerIndex } = useActions()

  useEffect(() => {
    setSneakerIndex(sneakerId)
    if (sneakerIndex >= 0) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [
    sneakerIndex,
    cartData,
    sneakerId,
    selectedColor,
    selectedSize,
    setSneakerIndex,
  ])

  return isInCart
}

export default useIsSneakerInCart
