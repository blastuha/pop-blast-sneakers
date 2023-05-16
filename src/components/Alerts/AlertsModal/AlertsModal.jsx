import React from 'react'
import Alert from '../Alert/Alert'

import useRemoveShownAlerts from '../../../hooks/useRemoveShownAlerts'
import styles from './alertsModal.module.scss'

function AlertsModal() {
  const alertsList = useRemoveShownAlerts()

  return (
    <div className={styles.alertsModal}>
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

export default AlertsModal
