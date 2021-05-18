import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct= (props) => {
    
    const [productInfo, setProductInfo] = useState({
        title:"",
        desc:"",
        price:""
    })
    const [errors, setErrors] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(response=>{
                console.log("*********")
                console.log(response)
                console.log("******")
                setProductInfo(response.data.results)
            })
            .catch(err=> console.log(err))
    }, [])
    
    const ChangeHandler = (e) => {
        console.log("changing the input")
        console.log(e.target.name)
        setProductInfo({
            ...productInfo,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`,productInfo)
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


    return (
        <div>
            <h3>Use the Form to Edit the product : {props.id}</h3>
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={ChangeHandler} name ="title" value={productInfo.title}/>
            </p>
            <p style = {{color:"red"}}>{errors.title? errors.title.message :""}</p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={ChangeHandler} name = "desc" value={productInfo.desc}/>
            </p>
            <p style = {{color:"red"}}>{errors.desc? errors.desc.message :""}</p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={ChangeHandler} name = "price" value={productInfo.price}/>
            </p>
            <p style = {{color:"red"}}>{errors.price? errors.price.message :""}</p>

            <input type="submit"/>
        </form>
        </div>
    );
};



export default EditProduct;