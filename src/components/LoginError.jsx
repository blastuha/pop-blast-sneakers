import React, { useState, useEffect } from 'react'

const LoginError = ({ errors }) => {
  const [showError, setShowError] = useState(false)

  const errorShowing = () => {
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
    showError && (
      <div class='login-error'>
        <span>{errorShowing()}</span>
      </div>
    )
  )
}

export default LoginError
