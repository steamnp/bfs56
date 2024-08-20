import useFetch from '../hooks/useFetch'
import { TCountry } from '../types/types'

function Country() {
  const { data, loading, error } = useFetch<TCountry[]>('https://restcountries.com/v3.1/name/usa')

  // throw new Error('Error')

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  if (data) {
    return <img src={data[0].flags.png} alt="" />
  }
}

export default Country
