import React from 'react'
import Product from './product'

const Price = () => {
  return (
    <>
      <div style={{marginBottom: 30}}>
        <b>{Product.price}</b>
      </div>
    </>
  )
}

export default Price