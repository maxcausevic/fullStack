import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, Navigate} from '@reach/router'


const AllAuthors = () => {
    const [authors, setAuthors] = useState([])
    const [deleteClicked, setDeleteClicked] = useState([false])

    useEffect(() =>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                console.log("hiiiii")
                setAuthors(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [deleteClicked])

    const deleteAuthor = (e, authorId) =>{
        console.log("delete this author", authorId)
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then (response => {
                console.log("deleted")
                setDeleteClicked(!deleteClicked)
            })
            .catch(err=> console.log(err))
    }
    return (
        <div>
            {
                authors.map((author,i) => {
                    return <div key={i} className="card">
                        <div class="card-body">
                            <h4 class="card-title">{author.authorName}</h4>
                        <button onClick={(e) => deleteAuthor(e, author._id)}>Delete Author</button>
                        <button><Link to={`/authors/update/${author._id}`}>Edit Author</Link></button>
                        <p><a href={`/authors/${author._id}`} className="card-link">View Author Details</a></p>
                    
                        </div>
                    </div>

                })
            }
        </div>
    );
};



export default AllAuthors;