import React from 'react'
import Alert from '../Alert/Alert'

import useAlerts from '../../../hooks/useAlerts'
import useWidth from '../../../hooks/useWidth'
import styles from './alertsModal.module.scss'

function AlertsModal() {
  const alertsList = useAlerts()
  const width = useWidth()
  const mobileStyles = width <= 600 ? styles.mobile : null

  return (
    <div className={`${styles.alertsModal} ${mobileStyles}`}>
      {alertsList.map((alert, i) => {
        return (
          <Alert
            key={i}
            alert={alert}
            mobileStyles={mobileStyles}
            width={width}
          />
        )
      })}
    </div>
  )
}

export default AlertsModal
