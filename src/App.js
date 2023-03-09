import './App.scss'
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
  return (
    <div className='wrapper'>
      <Header />
      <Categories categoryList={categoryList} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
