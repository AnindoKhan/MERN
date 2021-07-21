import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";
function EditAuthor(props){
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:8000/api/getAuthor/" + props.id)
        .then(response => setName(response.data.name))
        .catch(error => console.log(error))
    },[]);
    function editAuthor(e){
        e.preventDefault();
        axios.put('http://localhost:8000/api/edit/' +props.id, {name})
        .then(response => {
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
            <h1> Edit an Author</h1>
            <Link to= {"/"}> Home</Link>
            <form onSubmit={(e)=>editAuthor(e)}> 
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
export default EditAuthor