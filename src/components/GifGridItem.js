
import React from 'react'
import PropTypes from 'prop-types'
export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
