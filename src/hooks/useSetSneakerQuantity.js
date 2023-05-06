import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSneakerQuantity } from '../redux/slices/cartSlice'

const useSetSneakerQuantity = () => {
  const cartData = useSelector((state) => state.cart.cartData)
  const sneakerIndex = useSelector((state) => state.cart.sneakerIndex)
  const quantityOfSneaker = cartData[sneakerIndex]?.quantity
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSneakerQuantity(quantityOfSneaker))
  }, [quantityOfSneaker, dispatch])

  return quantityOfSneaker
}

export default useSetSneakerQuantity
