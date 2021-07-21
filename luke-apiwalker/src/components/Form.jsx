import React ,{useState} from "react";
import {navigate} from '@reach/router';
function Form(){
    const [recordType, setRecordType] = useState("planets");
    const [recordId, setRecordId] = useState("");

    const submitHandler = (e) => {
        navigate("/" + recordType +"/" +recordId);
    }
    return(
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>Search For:</label>
                <select value ={recordType} onChange={ (e)=> setRecordType(e.target.value)}>
                    <option value="planets"> Planets </option>
                    <option value="people"> People </option>
                    <option value="starships"> Starships </option>
                </select>
                <label>Id:</label>
                <input type="number" value={recordId} onChange={ (e)=> setRecordId(+e.target.value)}></input>
                <button> Search </button>
            </form>
            <br/>
        </div>
    )
}
export default Form;