import {useState, useEffect} from "react";
import Form from "./Form";
import axios from 'axios';

function LukeAPI(props){
    const {recordType, recordId} = props;
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    
    console.log(recordType);
    
    useEffect (() =>{
        axios.get('https://swapi.dev/api/' + recordType +"/" + recordId)
            .then(response => setData(response.data))
            .catch(setError);
    },[]);
    // console.log(data);
    if(error != null){
        return(
        <div>
        <h1> These aren't the droids you're looking for</h1>
        <img src={"https://img1.looper.com/img/gallery/obi-wan-kenobi-disney-release-date-cast-and-plot/intro-1566770638.jpg"}></img>  
        </div>
        )
    }
    if (Object.keys(data).length > 0) {
        
        if (recordType === "planets") {
            return( 
                <div>
                    <h1>Name: {data.name}</h1>
                    <h1>Diameter: {data.diameter}</h1>
                    <h1>Climate: {data.climate}</h1>
                    <h1>Gravity {data.gravity}</h1>
                </div>
            );
        } else if (recordType === "people"){
            return( 
                <div>
                    
                    <h1>Name: {data.name}</h1>
                    <h1>Height: {data.height}</h1>
                    <h1>Mass: {data.mass}</h1>
                    <h1>Birth Year:{data.birth_year}</h1>
                    <h1>HomeWorld {data.homeworld}</h1>
                </div>
            );
        } else {
            return( 
                <div>
                    <h1>Name: {data.name}</h1>
                    <h1>Model: {data.model}</h1>
                    <h1>Manufacturer: {data.manufacturer}</h1>
                    <h1>Crew: {data.crew} </h1>
                </div>
            );
        }
    } else {
        return(
            <p></p>
        );
    }
}
export default LukeAPI