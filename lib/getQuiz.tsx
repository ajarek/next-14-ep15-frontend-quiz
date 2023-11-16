'use client'
import { useEffect, useState } from 'react'

interface UseFetchResponse {
  data: {quizzes:[title: string]};
  pending: boolean;
  error: string | null;
}

export const useFetch = (url:string):UseFetchResponse=> {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortCont = new AbortController()
    // setTimeout(() => {
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${res.status}`
          )
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setData(null)
      })
      .finally(() => {
        setPending(false)
      })
    // }, 500)
    return () => abortCont.abort()
  }, [url])
  return { data, pending, error }
}
export default useFetch