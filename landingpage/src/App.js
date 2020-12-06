import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
