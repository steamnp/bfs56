import React from 'react'
import useFetch from './useFetch'

function Countries() {
  const { data, error, loading } = useFetch('https://restcountries.com/v3.1/all')

  if (error) {
    return <div className="text-red-700">{error}</div>
  }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data.map((country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  )
}

export default Countries
