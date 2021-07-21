import React, {useState} from 'react';

function NewTask(props){
    const [userInput, setUserInput] = useState("");
    const {list,setList} = props;
    function submitHandler(e){
        e.preventDefault();
        setList([...list,{item:userInput, isComplete:false}]);
        setUserInput("");
        console.log(list);
    }
    return(
        <form onSubmit = {(e) =>submitHandler(e)}>
            <h1> Add a task </h1>
            <input value={userInput} type="text" onChange = {(e) => setUserInput(e.target.value)} ></input>
            <button> Add</button>
        </form >
    )
}
export default NewTask;