import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { productLoader } from './components/pages/ProductPage'

import App from './App'
import Main from './components/Main'
import Cart from './components/pages/Cart'
import Contacts from './components/pages/Contacts'
import ProductPage from './components/pages/ProductPage'
import AuthenticationPage from './components/pages/AuthenticationPage'
import ForgetPassForm from './components/ForgetPassForm'
import AuthForm from './components/AuthForm'
import RegistrationForm from './components/RegistrationForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>ERROR!!!</h1>,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'cart',
        element: <Cart />,
        children: [
          {
            path: 'forget',
            element: <h1>Hello</h1>,
          },
        ],
      },
      {
        path: '*',
        element: <h1>ERROR!</h1>,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
        loader: productLoader,
        // мы делаем путь: products/:id, но сам запрос делается по ссылке из loadera
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        children: [
          {
            index: true,
            element: <AuthForm />,
          },
          {
            path: 'forget',
            element: <ForgetPassForm />,
          },
          {
            path: 'registration',
            element: <RegistrationForm />,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <RouterProvider router={router} />
  </>
)
