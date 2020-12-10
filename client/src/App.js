import './App.css';
import React, { useState, useRef } from 'react';
import { Redirect, NavLink, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Properties from './components/Properties';
import PropertyDetails from './components/PropertyDetails';
import Login from './components/Login';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef();
  const navLinksRef = useRef();
  const menuBackgroundRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const propertiesRef = useRef();
  const contactRef = useRef();

  const openCloseMenu = () => {
    if (!menuOpen) {
      // menuBtnRef.current.classList.add('open');
      // navLinksRef.current.classList.add('open');
      // menuBackgroundRef.current.classList.add('open');
      homeRef.current.classList.add('open');
      propertiesRef.current.classList.add('open');
      aboutRef.current.classList.add('open');
      contactRef.current.classList.add('open');
      setMenuOpen(true);
    } else {
      // menuBtnRef.current.classList.remove('open');
      // navLinksRef.current.classList.remove('open');
      // menuBackgroundRef.current.classList.remove('open');
      homeRef.current.classList.remove('open');
      propertiesRef.current.classList.remove('open');
      aboutRef.current.classList.remove('open');
      contactRef.current.classList.remove('open');
      setMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <NavLink
          to="/home"
          id="home-link"
          className="nav-links"
          ref={homeRef}
          activeClassName="highlight"
          onClick={openCloseMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          id="properties-link"
          className="nav-links"
          ref={propertiesRef}
          activeClassName="highlight"
          onClick={openCloseMenu}
        >
          Our Properties
        </NavLink>
        <NavLink
          to="/about"
          id="about-link"
          className="nav-links"
          ref={aboutRef}
          activeClassName="highlight"
          onClick={openCloseMenu}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          id="skills-link"
          className="nav-links"
          ref={contactRef}
          activeClassName="highlight"
          onClick={openCloseMenu}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/users/login"
          id="login-link"
          className="nav-links"
          ref={contactRef}
          activeClassName="highlight"
          onClick={openCloseMenu}
        >
          Login
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/properties"
          render={(props) => <Properties {...props} />}
        />
        <Route
          exact
          path="/properties/:id"
          render={(props) => <PropertyDetails {...props} />}
        />
        <Route
          exact
          path="/users/login"
          render={(props) => <Login {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
