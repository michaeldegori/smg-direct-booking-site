import './App.css';
import React from 'react';
import { Redirect, NavLink, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PropertyDetails from './components/PropertyDetails';

function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>

      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/properties/:id"
          render={(props) => <PropertyDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
