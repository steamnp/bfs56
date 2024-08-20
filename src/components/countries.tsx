import useFetch from '../hooks/useFetch'
import { TCountry } from '../types/types'

function Countries() {
  const { data, error, loading } = useFetch<TCountry[]>('https://restcountries.com/v3.1/all')
  console.log(data)
  if (error) {
    return <div className="text-red-700">{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return data.map((country, index) => (
      <div key={index}>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    ))
  }
}

export default Countries
