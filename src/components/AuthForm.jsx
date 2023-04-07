import React from 'react'

import { useOutletContext } from 'react-router-dom'

import TextField from './TextField'
import LoginError from './LoginError'
import FormButtons from './FormButtons'
import DynamicForm from './DynamicForm'

const AuthForm = () => {
  const [data, errors, handleChange, handleSubmit] = useOutletContext()

  return (
    <DynamicForm handleSubmit={handleSubmit}>
      <LoginError errors={errors} />
      <TextField
        label={'Email'}
        name={'email'}
        value={data.email}
        onChange={handleChange}
        errors={errors}
      />
      <TextField
        label={'Пароль'}
        type={'password'}
        name={'password'}
        value={data.password}
        onChange={handleChange}
        errors={errors}
      />
      <FormButtons
        firstBtnText={'Войти'}
        secondBtnText={'Восстановить пароль'}
        secondBtnLink={'forget'}
        thirdBtnText={'Зарегистрироваться'}
        thirdBtnLink={'registration'}
      />
    </DynamicForm>
  )
}

export default AuthForm
