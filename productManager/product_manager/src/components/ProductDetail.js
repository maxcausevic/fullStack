import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
    const [productInfo, setProductInfo] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log(res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (e, productId) => {
        console.log("delete this product", productId)
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(response => {
                console.log("deleted")
                console.log(response)
                console.log("deleted")
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>{props.id}</h1>
            {productInfo == null ? <h1>no matching products here</h1> :
                <>
                    <p>Title: {productInfo.title}</p>
                    <p>Description: {productInfo.desc}</p>
                    <p>Price : {productInfo.price} </p>
                    <button onClick={(e) => deleteProduct(e, productInfo._id)}>Delete Product</button>
                </>
            }

        </div>
    )
}

