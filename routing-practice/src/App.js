import './App.css';
import { Router } from '@reach/router';
// import Home from './components/Home.jsx';
import NumberComponent from './components/NumberComponent.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home path="/home"/> */}
        <NumberComponent path="/:input"/>
        <NumberComponent path="/:input/:color"/>
        <NumberComponent path="/:input/:color/:bc"/>
      </Router>
    </div>
  );
}

export default App;
