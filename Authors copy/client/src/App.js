import './App.css';
import Main from './Main.js';
import Home from './views/Home';
import AddAuthor from './views/AddAuthor';
import Edit from './views/EditAuthor';
import {Router}from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path ="/"/>
        <AddAuthor path="/new"/>
        <Edit path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
