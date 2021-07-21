import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

function Home () {
    const [authors, setAuthors]= useState([])
    const[author, setAuthor]= useState()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
        .then(response => setAuthors(response.data))
    }, [])
    function deleteHandler(authorId){
        axios.delete('http://localhost:8000/api/delete/' +authorId)
        .then(response => {
             
            setAuthors(authors.filter (author => author._id != authorId))
            navigate("/");
        })
    }
    return(
        <div>
            <h1> Favorite Authors</h1>
            <Link to ={"/new"}> Add an Author</Link>
            <p> We have quotes by:</p>
            
            <table  >
                <thead>
                    <th>Author</th>
                    <th> Actions</th>
                </thead>
                <tbody>
                    {authors.map((author,index)=>
                    <tr> 
                        <td key= {index}> {author.name}</td>
                        <td><Link to= {"/edit/" + author._id}> Edit </Link></td>
                        <td><button onClick = { () => deleteHandler(author._id)}> Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Home;