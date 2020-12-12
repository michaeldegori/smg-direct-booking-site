import './App.css';
import React, { useState, useRef } from 'react';
import {
  Redirect,
  NavLink,
  Link,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './components/Home';
import Properties from './components/Properties';
import PropertyDetails from './components/PropertyDetails';
import Login from './components/Login';
import EditProperty from './components/EditProperty';
import cabinGlyph from './images/cabin-glyph.png';
import contactGlyph from './images/contact-glyph.png';
import aboutGlyph from './images/about-glyph.png';
import background from './images/smoky-background.jpg';

const App = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const history = useHistory();

  const toggleHambuger = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const logout = () => {
    toggleHambuger();
    localStorage.removeItem('token');
    history.push('/home');
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <NavLink to="/home" className="navbar-brand">
          SMG
        </NavLink>
        <button
          onClick={toggleHambuger}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${!hamburgerActive && 'collapse'} navbar-collapse`}
          id="navbarNav"
        >
          <ul className={`${hamburgerActive && 'show'} navbar-nav`}>
            <li className="nav-item active">
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="highlight"
                onClick={toggleHambuger}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/properties"
                className="nav-link"
                activeClassName="highlight"
                onClick={toggleHambuger}
              >
                Our Properties
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="highlight"
                onClick={toggleHambuger}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users/login"
                id="login-link"
                className="nav-link"
                activeClassName="highlight"
                onClick={toggleHambuger}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="highlight"
                onClick={logout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="background-wrapper">
        <img src={background} alt="smoky mountains background" />
      </div>

      <Switch>
        <body>
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
          <Route
            exact
            path="/properties/edit/:id"
            render={(props) => <EditProperty {...props} />}
          />
        </body>
      </Switch>

      <footer className="container bg-primary fixed-bottom">
        <div className="row">
          <div className="col">
            <Link
              to="/properties"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={cabinGlyph} alt="properties" />
              <h6 class="text-dark m-0">properties</h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/about"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={aboutGlyph} alt="about us" />
              <h6 class="text-dark m-0">about</h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/contact"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={contactGlyph} alt="contact us" />
              <h6 class="text-dark m-0">contact</h6>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
