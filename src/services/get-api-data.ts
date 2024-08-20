import axios from 'axios'

export async function getData(url: string) {
  try {
    const { data } = await axios(url)
    return data
  } catch (error) {
    return error.message
  }
}
