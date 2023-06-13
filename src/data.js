import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

const data = [
  {
    id: '1',
    imageUrl:
      'https://static.insales-cdn.com/r/WvM-a6seMTo/rs:fit:950:1187:1/q:100/plain/images/products/1/3145/643001417/118894836_1.jpg@webp',
    title: 'Tommy Hilfiger retro court trainer',
    brand: 'Tommy Hilfiger',
    color: ['white', 'grey'],
    sizes: ['40', '41', '42'],
    price: 5538,
    description:
      'Whether it’s an embroidered logo, a bold graphic print or its iconic red, white and blue colour-blocking, there’s no mistaking Tommy Hilfiger. Flying the flag for all things retro 90s, scroll our Tommy Hilfiger at CROSSKING edit, featuring wardrobe-ready casualwear – think T-shirts, sweatshirts and joggers, as well as smart shirts, accessories, underwear and swimwear. Shop Tommy Jeans for classic denim pieces, or filter by Tommy Sport for workout gear that’ll get you motivated.',
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
    imageUrl:
      'https://static.insales-cdn.com/r/785IDKBK0tA/rs:fit:950:1187:1/q:100/plain/images/products/1/347/642998619/107143782_1.jpg@webp',
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
    imageUrl:
      'https://static.insales-cdn.com/r/cnRgr1J-deg/rs:fit:950:1187:1/q:100/plain/images/products/1/357/642474341/116525076_3.jpg@webp',
    title: 'New Balance XC-72 trainers in black and blue',
    brand: 'New Balance',
    color: 'black/blue',
    sizes: ['40', '41', '42'],
    price: 4690,
    description:
      'Whether it’s an embroidered logo, a bold graphic print or its iconic red, white and blue colour-blocking, there’s no mistaking Tommy Hilfiger. Flying the flag for all things retro 90s, scroll our Tommy Hilfiger at CROSSKING edit, featuring wardrobe-ready casualwear – think T-shirts, sweatshirts and joggers, as well as smart shirts, accessories, underwear and swimwear. Shop Tommy Jeans for classic denim pieces, or filter by Tommy Sport for workout gear that’ll get you motivated.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '6',
    imageUrl:
      'https://static.insales-cdn.com/r/q6vaDk0OwEo/rs:fit:950:1187:1/q:100/plain/images/products/1/4818/641905362/106878716_1.jpg@webp',
    title: 'Asics Gel-Quantum 180 trainers in white',
    brand: 'Asics',
    color: 'white',
    sizes: ['40', '41', '42'],
    price: 5900,
    description:
      'Founded over 100 years ago, New Balance (aka the dad-trainer OG) has been flexing its footwear credentials for as long as we can remember. Shop the New Balance at CROSSKING edit for running trainers with ultra-supportive soles, or earn extra style props with slick lifestyle shoes. Give your wardrobe a certified NB edge with its range of clothing and accessories, too – think T-shirts, hoodies, bags and hats, along with training tops and tights. Five-star aesthetic, we’re coming for you.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '7',
    imageUrl:
      'https://static.insales-cdn.com/r/M_JCyfbtWTw/rs:fit:950:1187:1/q:100/plain/images/products/1/1947/641894299/122024296_1.jpg@webp',
    title: 'Salomon XT-6 Mindful unisex trainers in beige',
    brand: 'Salomon',
    color: 'beige',
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
      'https://static.insales-cdn.com/r/Zw-zihxQquQ/rs:fit:950:1187:1/q:100/plain/images/products/1/5889/642168577/120053718_1.jpg@webp',
    title: 'Asics Gel-Sonoma 15-50 trainers in orange and green',
    brand: 'Salomon',
    color: 'multi',
    sizes: ['40', '41', '42'],
    price: 13200,
    description:
      'What do you get when you combine advanced technologies with flex-worthy footwear? Asics, obvs. Designed with top-tier workouts in mind, the brand serves up performance-enhanced styles that’ll support and improve your sessions so you can really get the best out of them. Hop, skip or jump over to our ASICS at CROSSKING edit and scroll for gym-ready styles and running trainers that will take you the distance.',
    category: 'Кроссовки',
    sex: 'Мужское',
  },
  {
    id: '9',
    imageUrl:
      'https://static.insales-cdn.com/r/EuzGC_Yli8I/rs:fit:950:1187:1/q:100/plain/images/products/1/7563/641883531/123649193_2.jpg@webp',
    title: 'Ugg Tasman Lta Cali topo slippers in khaki quilted camouflage',
    brand: 'UGG',
    color: 'green',
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
      'https://static.insales-cdn.com/r/iIb7S3cV0dg/rs:fit:950:1187:1/q:100/plain/images/products/1/2476/643000748/1964603_1.jpg@webp',
    title: 'Nike Running Air Zoom Pegasus 38 trainers in pink',
    brand: 'Nike',
    color: 'pink',
    sizes: ['40', '41', '42'],
    price: 7620,
    description:
      'When it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at CROSSKING edit, from Air Force 1s to super-cushioned VaporMax styles. Browse techy T-shirts, shorts and joggers from Nike Training, Nike Running and Nike Football, as well as sports accessories like arm bands and fitness aids. Nike SB nails casual days with hoodies, sweatshirts and chinos, too.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '11',
    imageUrl:
      'https://static.insales-cdn.com/r/z3LFJPyI7lc/rs:fit:950:1187:1/q:100/plain/images/products/1/921/642474905/117734124_1.jpg@webp',
    title: 'Vans Old Skool MTE-1 Varsity trainers in black/yellow',
    brand: 'Vans',
    color: 'black/yellow',
    sizes: ['40', '41', '42'],
    price: 3810,
    description:
      'You can’t think iconic skatewear without thinking Vans, right? Rewriting the boarding blueprint back in 1966 with a deck shoe that was better than the rest, the cult brand has flipped, popped and ollied its way into the footwear and fashion mainstream. Get familiar with durable canvas plimsolls, retro high-tops and signature slip-on trainers in our Vans at CROSSKING edit, or give its T-shirts, tops, jackets and accessories some wear-time, stat.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '12',
    imageUrl:
      'https://static.insales-cdn.com/r/XUcyIhVG8xI/rs:fit:950:1187:1/q:100/plain/images/products/1/722/642474706/1480484_1.jpg@webp',
    title: 'Converse Chuck 70 Hi parchment trainers',
    brand: 'Converse',
    color: 'cream',
    sizes: ['40', '41', '42'],
    price: 7438,
    description:
      'From simple beginnings on the basketball court, Converse trainers have reached iconic status. With a spirit of originality and rebellion, classic Chuck Taylor Converse All Star high-tops receive a constant update with fresh colour ways and prints introduced each season; while Converse’s clothing collection of vests, tees and hoodies continues to mirror their relaxed, contemporary-cool vibe.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '13',
    imageUrl:
      'https://static.insales-cdn.com/r/V5tPJDyXcvI/rs:fit:950:1187:1/q:100/plain/images/products/1/6718/642480702/120813385_1.jpg@webp',
    title: 'Adidas Originals Earlham trainers in white',
    brand: 'Adidas',
    color: 'white',
    sizes: ['40', '41', '42'],
    price: 8799,
    description:
      'adidas Originals needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends. Scroll the adidas Originals at CROSSKING edit to get your fix, from fresh trainers from the iconic Superstar, Stan Smith, Gazelle and Continental 80 collections to archive-inspired adidas Originals tracksuits, T-shirts and sweatshirts. And if you’re in need of some fresh kit, then cop yourself some sweat-wicking shorts, vests and compression tights from adidas Performance.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '14',
    imageUrl:
      'https://static.insales-cdn.com/r/rU26JIhqmPc/rs:fit:950:1187:1/q:100/plain/images/products/1/1295/642188559/119239211_1.jpg@webp',
    title: 'Nike Training MC 2 Trainers in white',
    brand: 'Nike ',
    color: 'white',
    sizes: ['40', '41', '42'],
    price: 5199,
    description:
      'adidas Originals needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends. Scroll the adidas Originals at CROSSKING edit to get your fix, from fresh trainers from the iconic Superstar, Stan Smith, Gazelle and Continental 80 collections to archive-inspired adidas Originals tracksuits, T-shirts and sweatshirts. And if you’re in need of some fresh kit, then cop yourself some sweat-wicking shorts, vests and compression tights from adidas Performance.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
  {
    id: '15',
    imageUrl:
      'https://static.insales-cdn.com/r/rntwvA_Eeqo/rs:fit:950:1187:1/q:100/plain/images/products/1/7885/642154189/106758375_1.jpg@webp',
    title: 'Nike Space Hippie 04 trainers in lime and stone',
    brand: 'Nike ',
    color: 'lime',
    sizes: ['40', '41', '42'],
    price: 8500,
    description:
      'adidas Originals needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends. Scroll the adidas Originals at CROSSKING edit to get your fix, from fresh trainers from the iconic Superstar, Stan Smith, Gazelle and Continental 80 collections to archive-inspired adidas Originals tracksuits, T-shirts and sweatshirts. And if you’re in need of some fresh kit, then cop yourself some sweat-wicking shorts, vests and compression tights from adidas Performance.',
    category: 'Кроссовки',
    sex: 'Женское',
  },
]

const brands = [
  'Nike',
  'Adidas',
  'Converse',
  'Vans',
  'UGG',
  'Salomon',
  'Tommy Hilfiger',
  'New Balance',
  'Asics',
]

const types = ['Кроссовки', 'Тапочки']

const sexArray = ['Мужское', 'Женское']

const categoryList = [
  { name: 'Пол', menu: sexArray },
  { name: 'Тип обуви', menu: types },
  { name: 'Бренды', menu: brands },
]

const alertObj = (alertsArr) => {
  return {
    id: alertsArr.length + 1,
    text: '✓ Товар добавлен в корзину',
  }
}

const authTitles = [
  { path: '/auth', title: 'Вход в кабинет покупателя' },
  { path: '/auth/forget', title: 'Восстановление пароля' },
  { path: '/auth/registration', title: 'Регистрация' },
]

const headerMenu = [
  { name: 'Главная', link: '/' },
  { name: 'Контакты', link: '/contacts' },
  { name: 'Доставка и оплата', link: '/delivery' },
  { name: 'Возврат и обмен', link: '/return' },
  { name: 'О нас', link: '/about' },
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
}

export {
  brands,
  types,
  sexArray,
  alertObj,
  categoryList,
  authTitles,
  headerMenu,
  fullnameReg,
  passwordReg,
  nav__bottom,
  pageNames,
}
