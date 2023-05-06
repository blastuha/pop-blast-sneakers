import React from 'react'
import Alert from './Alert'

import useShowAlerts from '../../hooks/useShowAlerts'

function AllAlerts() {
  const alertsList = useShowAlerts()

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
