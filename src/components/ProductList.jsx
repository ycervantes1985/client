import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';



function ProductList(props) {
    const {products} = props.product
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8001/api/productu/' + productId)
          .then(res => {
              removeFromDom(productId)
          })
  }

  
  return (
    <div>{products.map((product, idx)=>
    <>
    <Link key={idx} to={`/api/product/${product._id}`}>
    <p key={idx}>{product.tittle}</p>    
    </Link> 
    <button onClick={(e)=>{deleteProduct(product._id)}}>
    Delete
    </button> 
    </>
    
  )}</div>
  )
}

export default ProductList


