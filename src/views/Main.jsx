

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
    },[products])

    const removeFromDom = (productId) => {
      setProducts(products?.filter(product=> product._id !== productId));
  }
    
  return (
    <div>
           <ProductForm />
           <hr/>
           {loaded && <ProductList product={products} removeFromDom={removeFromDom}/>}

        </div>
  )
}

export default Main

