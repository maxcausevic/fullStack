import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'
import { navigate } from '@reach/router';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [deleteClicked, setDeleteClicked] = useState([false])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("hihihihihi")
                console.log(res)
                setProducts(res.data.results)

            })
            .catch(err => {
                console.log(err)
            })
    }, [deleteClicked] )

    const deleteProduct = (e, productId) => {
        console.log("delete this product", productId)
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(response => {
                console.log("deleted")
                console.log(response)
                console.log("deleted")
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }

    // const updateOneProduct = (e, productId) => {
    //     console.log("update this product", productId)
    //     axios.update(`/api/products/update/${productId}`)
    //         .then(response => {
    //             console.log("updated")
    //             console.log(response)
    //             console.log("updated")
    //         })
    //         .catch(err=> console.log(err))
    // }

    return (
        <div>
            {
                products.map((product,i) => {
                    return <div key={i} className="card">
                        <div class="card-body">
                            <h4 class="card-title">{product.title}</h4>
                            <h6 class="card-subtitle mb-2">Description: { product.desc }</h6>
                            <p class="card-text">
                                Price: ${product.price}
                        </p>
                        <button onClick={(e) => deleteProduct(e, product._id)}>Delete Product</button>
                        <button><Link to={`/products/update/${product._id}`}>Edit Product</Link></button>
                        <p><a href={`/products/${product._id}`} className="card-link">View Details</a></p>
                    
                        </div>
                    </div>

                })
            }
        </div>
    );
};



export default AllProducts;