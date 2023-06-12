import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { fetchProduct } from './services/fetchProduct'

import { store } from './redux/store/store'
import { Provider } from 'react-redux'

import App from './App'
import Main from './pages/Main'
import Cart from './pages/Cart'
import Contacts from './pages/Contacts'
import ProductPage from './pages/ProductPage'
import AuthenticationPage from './pages/AuthenticationPage'
import ForgetPassForm from './components/Authentication/ForgetPassForm/ForgetPassForm'
import AuthForm from './components/Authentication/AuthForm/AuthForm'
import RegistrationForm from './components/Authentication/RegistrationForm/RegistrationForm'
import Favourites from './pages/Favourites/Favourites'

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
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: '*',
        element: <h1>ERROR!</h1>,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
        loader: fetchProduct,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
