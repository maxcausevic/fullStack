import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


const ShowAuthor = (props) => {
    const [authorInfo, setAuthorInfo] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
            .then(res=>{
                console.log(res)
                setAuthorInfo(res.data.results)
            })
            .catch(err=> console.log(err))
    }, [])
    const deleteAuthor = (e, authorId) => {
        console.log("delete this author", authorId)
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
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
            {authorInfo == null ? <h1>no matching products here</h1> :
                <>
                    <p>Author: {authorInfo.authorName}</p>
                
                    <button onClick={(e) => deleteAuthor(e, authorInfo._id)}>Delete Author</button>
                </>
            }
        </div>
    );
};



export default ShowAuthor;