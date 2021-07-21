import React, {useState} from 'react';
function Api(){
    const [pokemon, setPokemon] = useState([])
    // you can just do function fetchPokemon() {}
    const fetchPokemon =() =>{
        fetch ("https://pokeapi.co/api/v2/pokemon?limit=999999")
        // first step 
        .then(response=>response.json())
        // second step but the most important one
        .then(blah=> {setPokemon(blah.results)})
        console.log(pokemon)
    }
    return(
        <div>
            <h1> Pokemon Api Assignment</h1>
            <button onClick ={fetchPokemon} > Fetch Pokemon </button>
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