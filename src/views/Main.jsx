

import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

function Main() {

  const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8001/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
                
            });
    },[])
    
  return (
    <div>
           <ProductForm />
           <hr/>
           {loaded && <ProductList product={products}/>}

        </div>
  )
}

export default Main

