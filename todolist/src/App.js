import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import NewTask from './components/NewTask.jsx';
import List from './components/List.jsx';

function App() {
  const [list, setList] = useState([]);
  const {userInput, setUserInput} = useState("");
  return (
    <div className="App">
      <NewTask setList={setList} list={list}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
