import React from 'react'
import Alert from './Alert'

function AllAlerts({ AllAlertsArr }) {
  return (
    <div className='alerts-modal'>
      {AllAlertsArr.map((alert, i) => {
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
