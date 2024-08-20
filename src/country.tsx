import useFetch from './useFetch'

function Country() {
  const { data, loading, error } = useFetch('https://restcountries.com/v3.1/name/usa')

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>Loading</div>
  }

  console.log(data)

  return <img src={data[0].flags.png} alt="" />
}

export default Country
