export const getFiltredSneakers = (sneakers, value) =>
  sneakers.filter((sneaker) =>
    sneaker.title.toLowerCase().includes(value.toLowerCase().trim())
  )
