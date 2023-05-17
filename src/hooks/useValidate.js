import { useCallback, useState } from 'react'

const useValidate = (data) => {
  const [errors, setErrors] = useState({})

  const validate = useCallback(() => {
    const errorsObj = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errorsObj[fieldName] = `${fieldName} обязателен для заполнения`
      }
    }
    setErrors(errorsObj)
  }, [data])

  return { errors, validate }
}

export default useValidate
