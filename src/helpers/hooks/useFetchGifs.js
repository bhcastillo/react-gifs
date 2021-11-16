import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { getGifs } from '../getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })
  useEffect(() => {
    getGifs(category)
      .then(imgs =>
        setTimeout(() => {
          setState({
            data: imgs,
            loading: false
          })
        }, 3000))
      .catch(e => console.log({ e }))
  }, [category])

  return state
}
