import React, {useEffect, useState} from 'react';
import axios from 'axios';
function Api(){
    const [pokemon, setPokemon] = useState([])
    // you can just do function fetchPokemon() {}
        const fetchButton=() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=999999")
            .then(response =>{setPokemon(response.data.results)})
    }
    return(
        <div>
            <h1> Pokemon Api Assignment</h1>
            <button onClick ={fetchButton} > Fetch Pokemon </button>
            <ul style ={{listStyle: "none"}}>
                {pokemon.map((poke, index)=>{ 
                return <li key={index}>{poke.name}</li>
                }
                )}
            </ul>
        </div>
    )
}
export default Api