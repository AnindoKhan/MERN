import './App.css';
import Form from './components/Form.jsx';
import LukeAPI from './components/LukeAPI.jsx';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Form/>
      <Router>
        <LukeAPI path="/:recordType/:recordId"/>
      </Router>
    </div>
  );
}

export default App;
