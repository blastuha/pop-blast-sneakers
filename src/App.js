import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Contacts from './components/pages/Contacts'
import Categories from './components/Categories'
import { brands } from './data'
import { types } from './data'
import Breadcrumb from './components/Breadcrumb'
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
      <Breadcrumb />
      <Contacts />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App
