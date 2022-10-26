import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Details() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8001/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    },[])

  return (
    <div>
        <p>Title: {product.tittle}</p>
        <p>Precio: {product.price}</p>
        <p>Descripcion: {product.description}</p>
    </div>
  )
}

export default Details




