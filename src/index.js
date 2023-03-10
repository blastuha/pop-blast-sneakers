import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main'
import Contacts from './components/pages/Contacts'
import ProductPage from './components/pages/ProductPage'

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
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '*',
        element: <h1>ERROV!!!</h1>,
      },
      {
        path: '/sneaker',
        element: <ProductPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
