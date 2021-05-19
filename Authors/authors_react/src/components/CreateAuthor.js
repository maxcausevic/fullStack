import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { navigate } from '@reach/router';


const CreateAuthor = () => {
    const [authorInfo, setAuthorInfo] = useState({
        authorName:  ""
    })
    const [errors, setErrors] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create', authorInfo)
        .then(res=>{
            console.log(res)
            if(res.data.results){
                navigate("/")
            }else{
                setErrors(res.data.errors)
            }
        })
        .catch(err=>console.log(err))
    }
    const changehandler =(e)=>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]:e.target.value
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <p>
            <label>Name</label><br/>
            <input type="text" onChange={changehandler} name ="authorName" value={authorInfo.authorName}/>
        </p>
        <p style = {{color:"red"}}>{errors.authorName? errors.authorName.message :""}</p>
        

        <input type="submit"/>
    </form>
    );
};



export default CreateAuthor;