import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(), [dispatch])
}

export default useActions
