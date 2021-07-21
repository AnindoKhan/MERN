import React, {useState} from 'react';
import axios from "axios";
import {Link, navigate} from "@reach/router"
function AddAuthor(){
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    function createAuthor(e) {
        e. preventDefault();
        axios.post('http://localhost:8000/api/new' ,{
            name 
        })
        .then( response => {
            console.log(response);
            navigate('/');
        })
        .catch(error => {
            const errorResponse = error.response.data.errors;
            const errorArr =[];
            for (const key in errorResponse){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    } 
    return(
        <div>
            <h1> Add an Author</h1>
            <Link to= {"/"}> Home</Link>
            <form onSubmit= {createAuthor}> 
                <input type="text" value= {name} onChange={(e)=>setName(e.target.value)}/>
                <button> Submit</button>
                <button onClick={()=>navigate('/')}> Cancel</button>
            </form>
            {errors.map((error,idx)=>
            <p key={idx} style={{color:"red"}}> {error}</p>
            )}
        </div>
    )
}
export default AddAuthor