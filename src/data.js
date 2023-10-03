/** @format */

import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const data = [
  {
    id: '1',
    imageUrl:
      'https://i.ibb.co/2PbN5cj/Ben-Sherman-smart-leather-penny-loafers-in-bordeaux.webp',
    title: 'Ben Sherman smart leather penny loafers in bordeaux',
    brand: 'Ben Sherman',
    color: ['brown', 'black'],
    sizes: ['40', '41', '42'],
    price: 5538,
    description:
      'Adopted by the Mod movement of the 1960s, Ben Sherman channel their Mod roots to a contemporary range of menswear, including everything from their iconic check shirts to polos and print t-shirts.',
    category: 'Кроссовки',
    sex: 'Мужское',
    link: 'Мужское/sneakers',
  },
  {
    id: '2',
    imageUrl:
      'https://static.insales-cdn.com/r/f6TdeHfTVf8/rs:fit:950:1187:1/q:100/plain/images/products/1/3070/642477054/109505334_1.jpg@webp',
    title: 'New Balance 327 trainers in off white',
    brand: 'New Balance',
    color: ['white', 'grey'],
    sizes: ['40', '41', '42'],
    price: 10250,
    description:
      'Founded over 100 years ago, New Balance (aka the dad-trainer OG) has been flexing its footwear credentials for as long as we can remember. Shop the New Balance at CROSSKING edit for running trainers with ultra-supportive soles, or earn extra style props with slick lifestyle shoes. Give your wardrobe a certified NB edge with its range of clothing and accessories, too – think T-shirts, hoodies, bags and hats, along with training tops and tights. Five-star aesthetic, we’re coming for you.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '3',
    imageUrl: 'https://i.ibb.co/sFwddKZ/salomon3.webp',
    title: 'Salomon X-Mission 3 trainers in sand',
    brand: 'Salomon',
    color: ['white', 'grey'],
    sizes: ['40', '41', '42'],
    price: 6990,
    description:
      'Encouraging us to play and connect with nature since 1947, Salomon is all about embracing the great outdoors. Whether you’re running, hiking or exploring, the brand’s footwear will have you ready for any adventure. Be prepped for unpredictable weather and terrains with lightweight, durable sandals and trail trainers, or smash your personal best with ultra-cushioned running shoes. Come rain, mud, snow or shine, our Salomon at CROSSKING edit has you covered.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '4',
    imageUrl:
      'https://static.insales-cdn.com/r/zn2XorcbS68/rs:fit:950:1187:1/q:100/plain/images/products/1/5395/642479379/124216192_1.jpg@webp',
    title: 'Tommy Hilfiger comfort padded slipper in navy',
    brand: 'Tommy Hilfiger',
    color: ['navy', 'green'],
    sizes: ['40', '41', '42'],
    price: 8000,
    description:
      'Whether it’s an embroidered logo, a bold graphic print or its iconic red, white and blue colour-blocking, there’s no mistaking Tommy Hilfiger. Flying the flag for all things retro 90s, scroll our Tommy Hilfiger at CROSSKING edit, featuring wardrobe-ready casualwear – think T-shirts, sweatshirts and joggers, as well as smart shirts, accessories, underwear and swimwear. Shop Tommy Jeans for classic denim pieces, or filter by Tommy Sport for workout gear that’ll get you motivated.',
    category: 'Тапочки',
    sex: 'Мужское',
  },
  {
    id: '5',
    imageUrl: 'https://i.ibb.co/dfrZ4zQ/f2c8fbbd47cc0e4efafb5e9b3588ca8c.jpg',
    title: 'New Balance XC-72 trainers in black and blue',
    brand: 'New Balance',
    color: ['brown', 'black'],
    sizes: ['40', '41', '42'],
    price: 4690,
    description:
      'Founded over 100 years ago, New Balance (aka the dad-trainer OG) has been flexing its footwear credentials for as long as we can remember. Shop the New Balance at CROSSKING edit for running trainers with ultra-supportive soles, or earn extra style props with slick lifestyle shoes. Give your wardrobe a certified NB edge with its range of clothing and accessories, too – think T-shirts, hoodies, bags and hats, along with training tops and tights. Five-star aesthetic, we’re coming for you.',
    category: 'Кроссовки',
    sex: 'Женские',
  },
  {
    id: '6',
    imageUrl:
      'https://i.ibb.co/CPmGN5r/Napapijri-river-moon-boots-in-silver.webp',
    title: 'Napapijri river moon boots in silver',
    brand: 'Napapijri',
    color: ['silver', 'black'],
    sizes: ['40', '41', '42'],
    price: 5900,
    description:
      'First thought up in the shadow of Europe’s highest peak, the Monte Bianco, outdoors-loving brand Napapijri has been combining innovative materials with close attention to style since 1987. Take cover when the temperature drops in its quilted jackets and hoodies.',
    category: 'Зимняя обувь',
    sex: 'Женское',
  },
  {
    id: '7',
    imageUrl:
      'https://i.ibb.co/BwFvMz6/Salomon-XT-6-Mindful-unisex-trainers-in-beige.webp',
    title: 'Salomon XT-6 Mindful unisex trainers in beige',
    brand: 'Salomon',
    color: ['beige'],
    sizes: ['40', '41', '42'],
    price: 14423,
    description:
      'Encouraging us to play and connect with nature since 1947, Salomon is all about embracing the great outdoors. Whether you’re running, hiking or exploring, the brand’s footwear will have you ready for any adventure. Be prepped for unpredictable weather and terrains with lightweight, durable sandals and trail trainers, or smash your personal best with ultra-cushioned running shoes. Come rain, mud, snow or shine, our Salomon at CROSSKING edit has you covered.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '8',
    imageUrl:
      'https://i.ibb.co/NTbfscx/New-Balance-327-trainers-in-off-white-and-brown.webp',
    title: 'New Balance 327 trainers in off white and brown',
    brand: 'New Balance',
    color: ['brown', 'black'],
    sizes: ['40', '41', '42'],
    price: 13200,
    description:
      'Founded over 100 years ago, New Balance (aka the dad-trainer OG) has been flexing its footwear credentials for as long as we can remember. Shop the New Balance at CROSSKING edit for running trainers with ultra-supportive soles, or earn extra style props with slick lifestyle shoes. Give your wardrobe a certified NB edge with its range of clothing and accessories, too – think T-shirts, hoodies, bags and hats, along with training tops and tights. Five-star aesthetic, we’re coming for you.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '9',
    imageUrl:
      'https://i.ibb.co/JKVqJBc/Ugg-Tasman-Lta-Cali-topo-slippers-in-khaki-quilted-camouflage.webp',
    title: 'Ugg Tasman Lta Cali topo slippers in khaki quilted camouflage',
    brand: 'UGG',
    color: ['green', 'gray'],
    sizes: ['40', '41', '42'],
    price: 8000,
    description:
      'The brand behind Australias original sheepskin boots, UGG combines luxurious comfort with durability and style. From modest beginnings in 1978 among the surf community, UGG boots were quickly adopted for their natural cosiness and laid-back appeal. Made with moisture-wicking sheepskin, the brand’s collection of classic tall and short styles works to keep your feet close to your natural body temperature.',
    category: 'Тапочки',
    sex: 'Мужское',
  },
  {
    id: '10',
    imageUrl:
      'https://i.ibb.co/KymNmZk/Timberland-Authentics-3-eye-classic-boat-shoes-in-rust.webp',
    title: 'Timberland Authentics 3 eye classic boat shoes in rust',
    brand: 'Timberland',
    color: ['brown'],
    sizes: ['40', '41', '42'],
    price: 7620,
    description:
      'With a rich New England heritage, Timberland signature work boots were quickly adopted by a new wave of youth culture. With a rugged feel and reputation for quality, Timberland keeps it laid-back and low-key across a range of boots, jersey pieces and outerwear.',
    category: 'Ботинки',
    sex: 'Мужское',
  },
  {
    id: '11',
    imageUrl:
      'https://i.ibb.co/Sc2ckwG/New-Balance-327-trainers-in-off-white-and-burgundy.webp',
    title: 'New Balance 327 trainers in off white and burgundy',
    brand: 'New Balance',
    color: ['red', 'light'],
    sizes: ['40', '41', '42'],
    price: 3810,
    description:
      'Founded over 100 years ago, New Balance (aka the dad-trainer OG) has been flexing its footwear credentials for as long as we can remember. Shop the New Balance at CROSSKING edit for running trainers with ultra-supportive soles, or earn extra style props with slick lifestyle shoes. Give your wardrobe a certified NB edge with its range of clothing and accessories, too – think T-shirts, hoodies, bags and hats, along with training tops and tights. Five-star aesthetic, we’re coming for you.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '12',
    imageUrl:
      'https://i.ibb.co/DRJbXmS/Converse-Chuck-70-Hi-parchment-trainers.webp',
    title: 'Converse Chuck 70 Hi parchment trainers',
    brand: 'Converse',
    color: ['cream'],
    sizes: ['40', '41', '42'],
    price: 7438,
    description:
      'From simple beginnings on the basketball court, Converse trainers have reached iconic status. With a spirit of originality and rebellion, classic Chuck Taylor Converse All Star high-tops receive a constant update with fresh colour ways and prints introduced each season; while Converse’s clothing collection of vests, tees and hoodies continues to mirror their relaxed, contemporary-cool vibe.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '13',
    imageUrl: 'https://i.ibb.co/3M54wht/Nike-asuna-2-slide-in-pecan.webp',
    title: 'Nike asuna 2 slide in pecan',
    brand: 'Nike',
    color: ['brown', 'gray'],
    sizes: ['40', '41', '42'],
    price: 8799,
    description:
      'When it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at CROSSKING edit, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Nike Training, Nike Running and Nike Football, as well as sports accessories like arm bands and fitness aids. Nike SB nails casual days with hoodies, sweatshirts and chinos, too.',
    category: 'Тапочки',
    sex: 'Мужские',
  },
  {
    id: '14',
    imageUrl:
      'https://i.ibb.co/5RTSYd4/Nike-Training-MC-2-Trainers-in-white.webp',
    title: 'Nike Training MC 2 Trainers in white',
    brand: 'Nike ',
    color: ['white'],
    sizes: ['40', '41', '42'],
    price: 5199,
    description:
      'When it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at CROSSKING edit, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Nike Training, Nike Running and Nike Football, as well as sports accessories like arm bands and fitness aids. Nike SB nails casual days with hoodies, sweatshirts and chinos, too.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '15',
    imageUrl:
      'https://i.ibb.co/C5jJWbQ/Nike-Running-Trail-Oneonta-next-sandals-in-triple-black.webp',
    title: 'Nike Running Trail Oneonta next sandals in triple black',
    brand: 'Nike ',
    color: ['black', 'orange'],
    sizes: ['40', '41', '42'],
    price: 8500,
    description:
      'When it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at CROSSKING edit, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Nike Training, Nike Running and Nike Football, as well as sports accessories like arm bands and fitness aids. Nike SB nails casual days with hoodies, sweatshirts and chinos, too.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '16',
    imageUrl:
      'https://i.ibb.co/C8DXnz1/Timberland-authentics-3-eye-classic-boat-shoes-in-burgundy-full-grain-leather.webp',
    title: 'Timberland authentics 3 eye classic boat shoes',
    brand: 'Timberland',
    color: 'brown',
    sizes: ['40', '41', '42'],
    price: 8799,
    description:
      'With a rich New England heritage, Timberland signature work boots were quickly adopted by a new wave of youth culture. With a rugged feel and reputation for quality, Timberland keeps it laid-back and low-key across a range of boots, jersey pieces and outerwear.',
    category: 'Ботинки',
    sex: 'Мужское',
  },
]

const brands = [
  'Ben Sherman',
  'Nike',
  'Adidas',
  'Converse',
  'Vans',
  'UGG',
  'Salomon',
  'Tommy Hilfiger',
  'New Balance',
  'Asics',
  'Napapijri',
  'Timberland',
]

const types = ['Кроссовки', 'Тапочки', 'Зимняя обувь', 'Ботинки']

const sexArray = ['Мужское', 'Женское']

const categoryList = [
  { name: 'Пол', menu: sexArray },
  { name: 'Тип обуви', menu: types },
  { name: 'Бренды', menu: brands },
]

const authTitles = [
  { path: '/auth', title: 'Вход в кабинет покупателя' },
  { path: '/auth/forget', title: 'Восстановление пароля' },
  { path: '/auth/registration', title: 'Регистрация' },
]

const headerMenu = [
  { name: 'Главная', link: '/' },
  { name: 'Контакты', link: '/contacts' },
  { name: 'О проекте', link: '/about' },
  { name: 'Доставка и оплата', link: '/delivery' },
]

const fullnameReg = `^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)`
const passwordReg = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`

const nav__bottom = [
  { text: 'Главная', icon: <AiFillHome />, link: '/', searchOpen: 'close' },
  {
    text: 'Поиск',
    icon: <FaSearch />,
    link: '',
    searchOpen: 'open',
  },
  {
    text: 'Корзина',
    icon: <FaShoppingCart />,
    link: '/cart',
    searchOpen: 'close',
  },
  {
    text: 'Избранное',
    icon: <MdFavorite />,
    link: '/favourites',
    searchOpen: 'close',
  },
  {
    text: 'Профиль',
    icon: <BsFillPersonFill />,
    link: '/auth',
    searchOpen: 'close',
  },
]

const pageNames = {
  contacts: 'Контакты',
  cart: 'Корзина',
  favourites: 'Избранное',
  about: 'О проекте',
}

const sortOptions = [
  { name: 'По умолчанию', query: '' },
  { name: 'По возрастанию цены', query: 'price&order=desc' },
  { name: 'По убыванию цены', query: 'price&order=asc' },
  { name: 'По названию A-Z', query: 'title&order=asc' },
  { name: 'По названию Z-A', query: 'title&order=desc' },
]

const burgerMenuLinks = [
  { icon: <BsFillPersonFill />, link: '/auth' },
  { icon: <AiFillHeart />, link: '/favourites' },
  { icon: <FaShoppingCart />, link: '/cart' },
]

export {
  brands,
  types,
  sexArray,
  categoryList,
  authTitles,
  headerMenu,
  fullnameReg,
  passwordReg,
  nav__bottom,
  pageNames,
  sortOptions,
  burgerMenuLinks,
}
