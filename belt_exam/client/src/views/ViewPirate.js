import React, {useEffect, useState}from 'react';
import axios from 'axios';
function ViewPirate(props){
    const [pirate,setPirate] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getPirate/' +props.id)
        .then(response => setPirate(response.data))
        .catch(error => console.log(error))
    },[])

    return(
        <div>
            <h1>{pirate.name}</h1>
            <img src={pirate.imgUrl} alt={pirate.name}/>
            <h1>About:</h1>
            <p>catch prase is {pirate.catchPhrase}</p>
            <p> Position is {pirate.crewPosition}</p>
            <p> chests is {pirate.chests}</p>
            <p> Has Hook:{pirate.hook? "yes": "no"}</p>
            <p> Has Eye Patch:{pirate.eyePatch? "yes": "no"} </p>
            <p> Has Peg Leg: {pirate.pegLeg ?"yes": "no"}</p>

        </div>
    )
}
export default ViewPirate;