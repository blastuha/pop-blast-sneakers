import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './loginError.module.scss'

const LoginError = ({ errors }) => {
  const [showError, setShowError] = useState(false)

  const errorMessage = () => {
    if (errors.email) {
      return errors.email
    }
    if (errors.password) {
      return errors.password
    }
  }

  useEffect(() => {
    if (
      (errors.email && errors.password) ||
      (!errors.email && !errors.password)
    ) {
      setShowError(false)
    } else if (errors.email) {
      setShowError(true)
    } else if (errors.password) {
      setShowError(true)
    }
  }, [errors])

  return (
    <TransitionGroup>
      {showError && (
        <CSSTransition
          in={showError}
          unmountOnExit
          timeout={400}
        >
          <div className={styles.loginError}>
            <span>{errorMessage()}</span>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default LoginError
