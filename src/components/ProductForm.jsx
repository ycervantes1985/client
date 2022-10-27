import React, {useState} from 'react'
import axios from 'axios';



function ProductForm() {
    const [tittle, setTittle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8001/api/product', {
            tittle,
            price,
            description
        })
        .then(response=>console.log("Response:", response))
        .catch(err=>console.log("Error:", err))
    }

    

return (
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Tittle</label>
            <input  type="text" onChange={e=>setTittle(e.target.value)}/>
        </p>
        <p>
            <label>Price</label>
            <input  type="text" onChange={e=>setPrice(e.target.value)}/>
        </p>
        <p>
            <label>Description</label>
            <input  type="text" onChange={e=>setDescription(e.target.value)}/>
        </p>
        <input type="submit" />

    </form>
)
}

export default ProductForm