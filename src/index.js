import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { productLoader } from './components/pages/ProductPage'

import App from './App'
import Main from './components/Main'
import Cart from './components/pages/Cart'
import Contacts from './components/pages/Contacts'
import ProductPage from './components/pages/ProductPage'
import Login from './components/pages/Login'
import ForgetPass from './components/pages/ForgetPass'
import AuthForm from './components/AuthForm'
import Registration from './components/pages/Registration'

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
        element: <Login />,
        children: [
          {
            index: true,
            element: <AuthForm />,
          },
          {
            path: 'forget',
            element: <ForgetPass />,
          },
          {
            path: 'registration',
            element: <Registration />,
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
