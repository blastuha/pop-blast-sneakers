import './App.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import { brands } from './data'
import { types } from './data'
import { sexArray } from './data'
import { Outlet } from 'react-router-dom'
import SectionHeader from './components/SectionHeader'

const categoryList = [
  { name: 'Бренды', menu: brands },
  { name: 'Тип обуви', menu: types },
  { name: 'Пол', menu: sexArray },
]

function App() {
  const [sneakers, setSneakers] = useState([])
  const [brand, setBrand] = useState('')
  const [shoesType, setShoesType] = useState('')
  const [sex, setSex] = useState('')
  const [showCategory, setShowCategory] = useState(false)

  useEffect(() => {
    const brandFilter = `${brand ? `&title=${brand}` : ''}`
    const shoesTypeFilter = `${shoesType ? `&filter=${shoesType}` : ''}`
    const sexFilter = `${sex ? `&filter=${sex}` : ''}`

    axios
      .get(
        `https://63fcd20c859df29986c57847.mockapi.io/sneakerpal?${brandFilter}${shoesTypeFilter}${sexFilter}`
      )
      .then((res) => setSneakers(res.data))
      .catch((err) => console.warn(err))
  }, [brand, shoesType, sex])

  const onChangeBrand = (brandData) => {
    brands.forEach((brandItem) => {
      if (brandData === brandItem) {
        setShoesType('')
        setSex('')
        setBrand(brandData)
      }
    })
  }

  const onChangeShoesType = (typeData) => {
    types.forEach((typeItem) => {
      if (typeItem === typeData) {
        setBrand('')
        setSex('')
        setShoesType(typeData)
      }
    })
  }

  const onChangeSex = (sexData) => {
    sexArray.forEach((sexItem) => {
      if (sexItem === sexData) {
        setBrand('')
        setShoesType('')
        setSex(sexData)
        console.log(sex)
      }
    })
  }

  // const onShowCategory = () => {
  //   setShowCategory(true)
  // }

  // const onHideCategory = () => {
  //   setShowCategory(false)
  // }

  return (
    <div className='wrapper'>
      <Header />
      <Categories
        categoryList={categoryList}
        onChangeBrand={onChangeBrand}
        onChangeShoesType={onChangeShoesType}
        onChangeSex={onChangeSex}
      />
      <Outlet context={[sneakers]} />
      <Footer />
    </div>
  )
}

export default App
