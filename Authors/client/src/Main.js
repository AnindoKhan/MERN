import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Main() {
    const [message, setMessage] = useState("Loading...")
    useEffect(() =>{
        axios.get('http://localhost:8000/api')
        .then(res=> setMessage(res.data.message))
    }, [])
    return (
        <div>
            <h1> Message from the Backend: {message}</h1>
        </div>
    )
}
export default Main

