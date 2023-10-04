/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { fetchProduct } from './services/fetchProduct'

import { store, persistor } from './redux/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import Main from './pages/Main/Main'
import Cart from './pages/Cart/Cart'
import Contacts from './pages/Contacts/Contacts'
import ProductPage from './pages/ProductPage/ProductPage'
import AuthenticationPage from './pages/Auth/AuthenticationPage'
import ForgetPassForm from './components/Authentication/ForgetPassForm/ForgetPassForm'
import AuthForm from './components/Authentication/AuthForm/AuthForm'
import RegistrationForm from './components/Authentication/RegistrationForm/RegistrationForm'
import Favourites from './pages/Favourites/Favourites'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Delivery from './pages/Delivery/Delivery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: 'delivery',
        element: <Delivery />,
      },
      {
        path: '*',
        element: <Error />,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
        loader: fetchProduct,
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
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
