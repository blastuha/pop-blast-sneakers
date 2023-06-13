import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { alerts } from '../redux/slices/alert/selectors'
import useActions from './useActions'

const useAlerts = () => {
  const { deleteShownAlert } = useActions()
  const { alertsList } = useSelector(alerts)

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertsList.length) {
        deleteShownAlert(alertsList[0].id)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [alertsList, deleteShownAlert])

  return alertsList
}

export default useAlerts
