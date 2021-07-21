import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';
import React, {useState} from 'react';

function App() {
  const [tabsList, setTabslist]= useState([
    {label:"tab 1", content:"content from tab 1 "},
    {label:"tab 2", content:"content from tab 2 "},
    {label:"tab 3", content:"content from tab 3 "},
    {label:"tab 4", content:"content from tab 4"}
  ]);
  const [currentContent, setCurrentContent] = useState(tabsList[0].content);
  return (
    <div className="App">
      <Tabs tabsList={tabsList} 
      setCurrentContent={setCurrentContent}/> 
      <Display currentContent = {currentContent}/>
    </div>
  );
}

export default App;
