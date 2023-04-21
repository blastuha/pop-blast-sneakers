import React from 'react'
import Alert from './Alert'

import { useSelector } from 'react-redux'

function AllAlerts() {
  const alertsList = useSelector((state) => state.alerts.alertsList)

  return (
    <div className='alerts-modal'>
      {alertsList.map((alert, i) => {
        return (
          <Alert
            key={i}
            alert={alert}
          />
        )
      })}
    </div>
  )
}

export default AllAlerts
