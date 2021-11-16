import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../helpers/hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
export const Gifgrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)
  return (
    <>
      <h3> {category} </h3>
      {/* <pre>{ images }</pre> */}
      {loading && 'Cargando'}
      <div className="card-grid">
        { images.length > 0 &&
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img} />
          ))
        }
      </div>
    </>
  )
}

Gifgrid.propTypes = {
  category: PropTypes.string.isRequired
}
