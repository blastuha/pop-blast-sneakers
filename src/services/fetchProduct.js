import axios from 'axios'

export async function fetchProduct({ params }) {
  return axios
    .get(`https://648ae01017f1536d65e9e1f9.mockapi.io/sneakers/${params.id}`)
    .catch((res) =>
      console.error('Ошибка получения данных по кроссовку для страницы', res)
    )
}
