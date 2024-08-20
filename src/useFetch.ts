// The react hook that we created ourself-> custom hook

import { useEffect, useState } from 'react'

function useFetch(url: string) {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return { data, loading, error }
}

export default useFetch
