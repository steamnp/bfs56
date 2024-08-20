// The react hook that we created ourself-> custom hook

import { useEffect, useState } from 'react'

// <T> -> TypeScript Generic

function useFetch<T>(url: string) {
  // How to type useState hook?
  const [data, setData] = useState<T | null>(null)
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
