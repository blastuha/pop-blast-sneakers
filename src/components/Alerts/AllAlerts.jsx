import React from 'react'
import Alert from './Alert'

import useRemoveShownAlerts from '../../hooks/useRemoveShownAlerts'

function AllAlerts() {
  const alertsList = useRemoveShownAlerts()

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
