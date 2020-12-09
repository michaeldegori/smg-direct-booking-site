import './App.css';
import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>

      <Switch>
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        {/* <Route exact path="/properties/:id" render={(props) => <PropertyDetails {...props} />} /> */}
      </Switch>
    </div>
  );
}

export default App;
