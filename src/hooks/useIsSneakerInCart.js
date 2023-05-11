import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSneakerIndex } from '../redux/slices/cart/cartSlice'
import { allCartStates } from '../redux/slices/cart/selectors'

const useIsSneakerInCart = (sneakerId) => {
  const [isInCart, setIsInCart] = useState(false)
  const dispatch = useDispatch()
  const { selectedColor, selectedSize, cartData, sneakerIndex } =
    useSelector(allCartStates)

  useEffect(() => {
    dispatch(setSneakerIndex(sneakerId))
    if (sneakerIndex >= 0) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [dispatch, sneakerIndex, cartData, sneakerId, selectedColor, selectedSize])

  return isInCart
}

export default useIsSneakerInCart
