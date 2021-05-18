import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const AllProducts = () => {
    const [products, setProducts] = useState([])

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
    }, [] )


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
                        <a href={`/products/${product._id}`} className="card-link">View Details</a>
                    
                        </div>
                    </div>

                })
            }
        </div>
    );
};



export default AllProducts;