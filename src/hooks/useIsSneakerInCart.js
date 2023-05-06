import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSneakerIndex, setIsInCart } from '../redux/slices/cartSlice'
import { useLoaderData } from 'react-router-dom'

const useIsSneakerInCart = () => {
  const sneakerDTO = useLoaderData()
  const dispatch = useDispatch()
  const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const selectedSize = useSelector((state) => state.cart.selectedSize)
  const selectedColor = useSelector((state) => state.cart.selectedColor)
  const cartData = useSelector((state) => state.cart.cartData)
  const isInCart = useSelector((state) => state.cart.isInCart)

  useEffect(() => {
    dispatch(setSneakerIndex(sneakerDTO.data.id))
    if (sneakerIndex >= 0) {
      dispatch(setIsInCart(true))
    } else {
      dispatch(setIsInCart(false))
    }
  }, [
    dispatch,
    sneakerDTO,
    sneakerIndex,
    selectedSize,
    selectedColor,
    cartData,
  ])

  return isInCart
}

export default useIsSneakerInCart
