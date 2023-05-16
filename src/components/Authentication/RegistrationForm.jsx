import React, { useState } from 'react'

import DynamicForm from './DynamicForm'
import TextField from '../TextFeld/TextField'
import FormButtons from './FormButtons'

const fullnameReg = `^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)`
const passwordReg = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`

const RegistrationForm = () => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'fullname',
      error: 'Username shouldnt include any special character!',
      label: 'Фамилия и Имя',
      pattern: fullnameReg,
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      error: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      error:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Пароль',
      pattern: passwordReg,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      error: 'Passwords dont match!',
      label: 'Пароль',
      pattern: values.password,
      required: true,
    },
  ]

  const handleChange = ({ target }) => {
    setValues((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <DynamicForm handleSubmit={handleSubmit}>
      {inputs.map((input) => (
        <TextField
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={handleChange}
        />
      ))}
      <FormButtons
        firstBtnText={'Зарегистрироваться'}
        secondBtnText={'У меня уже есть аккаунт'}
        secondBtnLink={'/auth'}
      />
    </DynamicForm>
  )
}

export default RegistrationForm
