import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
function Home (){
    const [pirates, setPirates] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allPirates')
        .then(response =>setPirates(response.data))
    },[])
    function addPirate(){
        navigate("/pirate/new")
    }
    function viewPirate(pirateId){
        navigate('/pirate/' +pirateId)
    }
    function deletePirate(pirateId){
        axios.delete('http://localhost:8000/api/deletePirate/' +pirateId)
        .then(res => {
            console.log(res)
            setPirates(pirates.filter(pirate =>pirate._id != pirateId))
            navigate('/pirates');
        })
    }
    return (
        <div>
        <h1> Pirate Crew</h1>
        <button onClick={()=> {addPirate()}}> Add a pirate </button>
        {pirates.map((pirate, index)=>
        <p key ={index}>{pirate.name}
            <img src= {pirate.imgUrl} alt={pirate.name}/>
            <button onClick={()=> {viewPirate(pirate._id)}}> View Pirate</button>
            <button onClick={()=> {deletePirate(pirate._id)}}> Walk the Plank</button> 
        </p>
        )}
        </div>
    )
}
export default Home;
