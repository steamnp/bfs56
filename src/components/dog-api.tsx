import useFetch from '../hooks/useFetch'

interface IDogImage {
  message: string
  status: string
}

function DogImage() {
  const { data, loading, error } = useFetch<IDogImage>('https://dog.ceo/api/breeds/image/random')

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return <img src={data.message} alt="" />
  }
}

export default DogImage
