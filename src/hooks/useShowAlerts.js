import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteShownAlert } from '../redux/slices/alertsSlice'

const useShowAlerts = () => {
  const dispatch = useDispatch()
  const alertsList = useSelector((state) => state.alerts.alertsList)

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertsList.length) {
        dispatch(deleteShownAlert(alertsList[0].id))
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [alertsList, dispatch])

  return alertsList
}

export default useShowAlerts
