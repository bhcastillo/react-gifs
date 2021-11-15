import React, { useState } from 'react'
import { AddCategory } from './components/addCategory'
import { Gifgrid } from './components/Gifgrid'

export const GifExportApp = () => {
  const [categories, setCategories] = useState(['Hunter X'])

  return (
    <>
      <h2>GifExportApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      <ol>
        {categories.map((category) => (
          <Gifgrid
          key={category}
          category= {category}
          />
        ))}
      </ol>
    </>
  )
}
