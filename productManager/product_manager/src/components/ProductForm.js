import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("")

    const [errors, setErrors] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            title,
            desc,
            price
        })
            .then(res=>{
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    setErrors(res.data.errors)
                }
                
            })
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} name ="title" value={title}/>
            </p>
            <p style = {{color:"red"}}>{errors.title? errors.title.message :""}</p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} name = "desc" value={desc}/>
            </p>
            <p style = {{color:"red"}}>{errors.desc? errors.desc.message :""}</p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} name = "price" value={price}/>
            </p>
            <p style = {{color:"red"}}>{errors.price? errors.price.message :""}</p>

            <input type="submit"/>
        </form>
    )
}

