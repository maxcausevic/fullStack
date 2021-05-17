import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            title,
            desc,
            price
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} name ="title" value={title}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} name = "desc" value={desc}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} name = "price" value={price}/>
            </p>

            <input type="submit"/>
        </form>
    )
}

