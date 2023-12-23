import { useEffect, useState } from 'react'

export interface Video {
  id: number
  title: string
  urlVideo: string
  userId: number
}

async function videoRequest(page: number): Promise<Video[]> {
  const response = await fetch(
    `http://localhost:3333/videos?_page=${page}&_limit=3`
  )
  const data = await response.json()
  return data
}

export function useFetchVideos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)

  function nextPage() {
    if (loading) return
    setPage((page) => page + 1)
  }

  useEffect(() => {
    setLoading(true)
    setError(false)

    videoRequest(page)
      .then((data) => {
        setVideos((prev) => [...prev, ...data])
      })
      .catch((error) => {
        console.log('error', error)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [page])

  return { videos, loading, error, nextPage }
}
