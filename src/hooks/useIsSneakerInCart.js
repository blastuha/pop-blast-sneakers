import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSneakerIndex } from '../redux/slices/cart/cartSlice'
import { setIsInCart } from '../redux/slices/cart/cartSlice'
import { allCartStates } from '../redux/slices/cart/selectors'

const useIsSneakerInCart = (sneakerId) => {
  const dispatch = useDispatch()
  const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const cartData = useSelector((state) => state.cart.cartData)
  const isInCart = useSelector((state) => state.cart.isInCart)
  const { selectedColor, selectedSize } = useSelector(allCartStates)

  useEffect(() => {
    dispatch(setSneakerIndex(sneakerId))
    if (sneakerIndex >= 0) {
      dispatch(setIsInCart(true))
    } else {
      dispatch(setIsInCart(false))
    }
  }, [dispatch, sneakerIndex, cartData, sneakerId, selectedColor, selectedSize])

  return isInCart
}

export default useIsSneakerInCart
