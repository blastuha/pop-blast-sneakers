import './App.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import { brands } from './data'
import { types } from './data'
import { Outlet } from 'react-router-dom'

const categoryList = [
  { name: 'Бренды', menu: brands },
  { name: 'Тип обуви', menu: types },
  { name: 'Пол', menu: ['Для мужчин', 'Для женщин'] },
]

function App() {
  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    axios
      .get('https://63fcd20c859df29986c57847.mockapi.io/sneakerpal')
      .then((res) => setSneakers(res.data))
      .catch((err) => console.warn(err))
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <Categories categoryList={categoryList} />
      <Outlet context={[sneakers]} />
      <Footer />
    </div>
  )
}

export default App
