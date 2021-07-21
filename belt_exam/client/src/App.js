import './App.css';
import Home from './views/Home';
import AddPirate from './views/AddPirate';
import ViewPirate from './views/ViewPirate';
import {Router}from "@reach/router";
function App() {
  return (
    <div className="App">
      <Router>
      <Home path='/pirates'/>
      <AddPirate path='/pirate/new'/>
      <ViewPirate path='/pirate/:id'/>
      </Router>
    </div>
  );
}

export default App;
