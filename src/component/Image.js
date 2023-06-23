import React from 'react'
import Product from './product'

const Image = () => {
  return (
    <>
       <img src={Product.image} alt="" style={{maxWidth: '100%', borderRadius:8 }}/>
    </>
  )
}

export default Image