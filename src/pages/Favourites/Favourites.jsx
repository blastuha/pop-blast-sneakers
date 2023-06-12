import React from 'react'
import Breadcrumb from '../../components/Breadcrump/Breadcrumb'
import Sneakers from '../../components/Sneakers/Sneakers'
import useWidth from '../../hooks/useWidth'
import styles from './favourites.scss'

const fav = [
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
]

const Favourites = () => {
  const width = useWidth()
  return (
    <div className='favourites'>
      {width > 767 && <Breadcrumb />}
      <h3 className='favourites__header'>Избранное</h3>
      <div className='favourites__main'>
        <Sneakers
          sneakersList={fav}
          value=''
          isFavouristes='true'
        />
      </div>
    </div>
  )
}

export default Favourites
