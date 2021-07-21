import React ,{useState} from 'react';
const BoxGenerator = props => {
    const [color,setColor] = useState("");
    const changingColor = (e) => {
        e.preventDefault();
        props.addAColor(color);
    }
    return(
        <div>
            <form>
                <input type="text" onChange = {e => setColor(e.target.value)}></input>
                <button onClick= {e =>changingColor(e) }>  Submit </button>
            </form>
        </div>
    ) 
}

export default BoxGenerator;