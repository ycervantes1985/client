import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';






function Update() {
    const {id} = useParams();
    const [tittle, setTittle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:8001/api/product/${id}`)
            .then(res => {
                setTittle(res.data.tittle);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8001/api/productu/${id}`, {
            tittle,
            price,
            description
        })
            .then(res => console.log(res));
    }
  return (
    <div><h1>Update a Product</h1>
    <form onSubmit={updateProduct}>
        <p>
            <label>Tittle</label><br />
            <input type="text" 
            name="tittle" 
            value={tittle} 
            onChange={(e) => { setTittle(e.target.value) }} />
        </p>
        <p>
            <label>Price</label><br />
            <input type="text" 
            name="price"
            value={price} 
            onChange={(e) => { setPrice(e.target.value) }} />
        </p>
        <p>
            <label>Description</label><br />
            <input type="text" 
            name="description"
            value={description} 
            onChange={(e) => { setDescription(e.target.value) }} />
        </p>
        <input type="submit" />
    </form></div>
  )
}

export default Update








