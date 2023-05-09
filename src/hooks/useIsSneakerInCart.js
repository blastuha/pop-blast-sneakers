import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSneakerIndex, setIsInCart } from '../redux/slices/cartSlice'

const useIsSneakerInCart = (sneakerId) => {
  const dispatch = useDispatch()
  const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const selectedSize = useSelector((state) => state.cart.selectedSize)
  const selectedColor = useSelector((state) => state.cart.selectedColor)
  const cartData = useSelector((state) => state.cart.cartData)
  const isInCart = useSelector((state) => state.cart.isInCart)

  useEffect(() => {
    dispatch(setSneakerIndex(sneakerId))
    if (sneakerIndex >= 0) {
      dispatch(setIsInCart(true))
    } else {
      dispatch(setIsInCart(false))
    }
  }, [dispatch, sneakerIndex, selectedSize, selectedColor, cartData, sneakerId])

  return isInCart
}

export default useIsSneakerInCart
