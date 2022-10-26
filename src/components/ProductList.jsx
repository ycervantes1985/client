import React from 'react'
import {Link} from 'react-router-dom'



function ProductList(props) {
    const {products} = props.product
  return (
    <div>{products.map((product, idx)=><Link key={product._id} to={`/api/product/${product._id}`}><p key={idx}>{product.tittle}</p></Link>
         
    )}</div>
  )
}

export default ProductList


