import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const EditAuthor = (props) => {
    const [authorInfo, setAuthorInfo] = useState({
        authorName: ""
    })
    const [errors, setErrors] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`, authorInfo)
            .then(response=>{
                console.log(response)
                setAuthorInfo(response.data.results)
            })
            .catch(err=> console.log(err))
    }, [])
    const ChangeHandler = (e) => {
        console.log("changing the input")
        console.log(e.target.name)
        setAuthorInfo({
            ...authorInfo,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`,authorInfo)
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
        <form onSubmit={onSubmitHandler}>
        <p>
            <label>Name</label><br/>
            <input type="text" onChange={ChangeHandler} name ="authorName" value={authorInfo.authorName}/>
        </p>
        <p style = {{color:"red"}}>{errors.authorName? errors.authorName.message :""}</p>
        

        <input type="submit"/>
    </form>
    );
};



export default EditAuthor;