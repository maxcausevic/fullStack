import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Router, Link} from '@reach/router'
import CreateAuthor from './components/CreateAuthor';
import AllAuthors from './components/AllAuthors'
import EditAuthor from './components/EditAuthor'
import ShowAuthor from './components/ShowAuthor'

function App() {
  return (
    <div className="App">
      <h1>Hi, you're at Famous Authors!</h1>
      <p><Link to="/authors/new">Add a New Author</Link></p>
      <p><Link to="/">Home</Link></p>

      <Router>
        <AllAuthors path="/"/>
        <CreateAuthor path="/authors/new"/>
        <EditAuthor path="/authors/update/:id"/>
        <ShowAuthor path="/authors/:id"/>

      </Router>
    </div>
  );
}

export default App;
