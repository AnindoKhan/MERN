import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router"
function AddPirate(){
    const [name, setName]= useState('');
    const [imgUrl, setImgUrl]= useState('');
    const [chests, setChests]= useState('');
    const [catchPhrase,setCatchPhrase]= useState('')
    const [crewPosition, setCrewPosition]= useState('Captain');
    const [errors, setErrors] = useState([]);
    const [hook, setHook]= useState(true);
    const [pegLeg, setPegLeg]= useState(true);
    const [eyePatch, setEyePatch]= useState(true);


    function addPirate(e){
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new',{
            name,
            imgUrl,
            chests,
            catchPhrase,
            crewPosition,
            hook,
            eyePatch,
            pegLeg
        })
        .then( response => {
            console.log(response);
            navigate('/pirates');
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
            <h1>Add a Pirate</h1>
            <form onSubmit ={addPirate}> 
                <label > Pirate Name</label>
                <input type="text" value ={name} onChange={(e)=>setName(e.target.value)}/>
                <label> Image</label>
                <input type="text" value ={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
                <label> Number of Treasure </label>
                <input type="text" value ={chests} onChange={(e)=>setChests(e.target.value)}/>
                <label> Catch Phrase</label>
                <input type="text" value ={catchPhrase} onChange={(e)=>setCatchPhrase(e.target.value)}/>
                <label> Crew Position</label>
                <select value ={crewPosition} onChange={(e)=>setCrewPosition(e.target.value)}>
                <option value="Captain"> Captain </option>
                <option value="First Mate"> First Mate </option>
                <option value="Quarter Master"> Quarter Master </option>
                <option value="Boatswain"> BoatSwain </option>
                <option value="Powder Monkey"> Powder Monkey </option>
                </select>
                <button> Submit</button>
            </form>
                <input type="checkbox" onChange={(e)=>setHook(e.target.checked)} checked = {hook}/><label> Hook</label>
                <input type="checkbox" onChange={(e)=>setPegLeg(e.target.checked)}checked = {pegLeg}/><label> Eye Patch</label>
                <input type="checkbox" onChange={(e)=>setEyePatch(e.target.checked)}checked = {eyePatch}/><label> Peg Leg</label>
            {errors.map((error,idx)=>
            <p key={idx} style={{color:"red"}}> {error}</p>
            )}
        </div>
    )
}
export default AddPirate;