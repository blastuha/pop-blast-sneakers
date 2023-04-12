import React from 'react'
import Alert from './Alert'

function AllAlerts({ alertsList }) {
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