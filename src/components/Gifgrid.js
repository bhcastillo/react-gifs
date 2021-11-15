import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
export const Gifgrid = ({ category }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=5&api_key=NrZDVtLvkKu3Y8qh5ANm0CyuxsmCePcU'
    const resp = await fetch(url)
    const data = await resp.json()
    const gifs = data.data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url
      }
    })
    console.log({ gifs })
  }
  getGifs()
  return (
    <div>
          <h3>{category}</h3>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>hola</button>
    </div>
  )
}

Gifgrid.propTypes = {
  category: PropTypes.string.isRequired
}
