// The react hook that we created ourself-> custom hook

import { useEffect, useState } from 'react'
import axios from 'axios'
import { getData } from '../services/get-api-data'

// <T> -> TypeScript Generic

// - then method
// - async await

function useFetch<T>(url: string) {
  // How to type useState hook?
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // GET -> Read
  // POST -> Create
  // PUT/PATCH -> Update
  // DELETE -> Delete
  useEffect(() => {
    // axios(url)
    //   .then(({ data }) => {
    //     setData(data)
    //     setLoading(false)
    //   })
    //   .catch((error) => {
    //     setError(error.message)
    //   })

    getData(url)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  return { data, loading, error }
}

export default useFetch
