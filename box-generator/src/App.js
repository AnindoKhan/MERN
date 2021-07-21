import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BoxGenerator from './components/BoxGenerator';
import Display from './components/Display';

function App() {
  // creating an empty array called colors in state 
  const [colors, setColors] = useState([])
  const addColor = (newColor)=> {
    setColors([...colors,newColor]);
  }
  return (
    <div className="App">
        <BoxGenerator addAColor={addColor}/>
        <Display listOfColors={colors}/>
    </div>
  );
}

export default App;
