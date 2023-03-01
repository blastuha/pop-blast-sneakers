import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sneaker from './Sneaker'

function Main() {
  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    axios
      .get('https://63fcd20c859df29986c57847.mockapi.io/sneakerpal')
      .then((res) => setSneakers(res.data))
      .catch((err) => console.warn(err))
  }, [])

  // setTimeout(console.log(sneakers), 1000)

  return (
    <div className='main'>
      <div className='main__container'>
        <div className='main__sneakers'>
          <Sneaker sneakers={sneakers} />
        </div>
      </div>
    </div>
  )
}

export default Main
