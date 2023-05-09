import axios from 'axios'

export async function fetchProduct({ params }) {
  return axios
    .get(`https://63fcd20c859df29986c57847.mockapi.io/sneakerpal/${params.id}`)
    .catch((res) =>
      console.error('Ошибка получения данных по кроссовку для страницы', res)
    )
}
