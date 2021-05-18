import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [productInfo, setProductInfo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(res)
                setProductInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    }, [])
    return (
        <div>
            <h1>{props.id}</h1>
            <p>Title: {productInfo.title}</p>
            <p>Description: {productInfo.desc}</p>
            <p>Price : {productInfo.price} </p>
        </div>
    )
}

