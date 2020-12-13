import './App.css';
import React, { useState } from 'react';
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
import logo from './images/smg-logo-blue-cabin-only.png';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const App = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/home');
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top p-0">
        <NavLink to="/home" className="navbar-brand px-4 py-2">
          <img src={logo} alt="smoky mountain getaways" />
        </NavLink>
        <Button
          className="burger rounded-pill bg-transparent border-0 px-4 py-2"
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          <div className={`${open && 'burger-open'} line1 rounded-pill`}></div>
          <div className={`${open && 'burger-open'} line2 rounded-pill`}></div>
          <div className={`${open && 'burger-open'} line3 rounded-pill`}></div>
        </Button>
        <Collapse in={open}>
          <div className="navbar-collapse px-0" id="navbarNav">
            <div className="full-height-nav bg-white p-0 d-flex justify-content-center align-items-center">
              <ul className="show navbar-nav text-center">
                <li className="nav-item my-3 active">
                  <NavLink
                    onClick={() => setOpen(!open)}
                    to="/home"
                    className="nav-link text-dark p-0"
                    activeClassName="highlight"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item my-3">
                  <NavLink
                    onClick={() => setOpen(!open)}
                    to="/properties"
                    className="nav-link text-dark p-0"
                    activeClassName="highlight"
                  >
                    Our Properties
                  </NavLink>
                </li>
                <li className="nav-item my-3">
                  <NavLink
                    onClick={() => setOpen(!open)}
                    to="/about"
                    className="nav-link text-dark p-0"
                    activeClassName="highlight"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item my-3">
                  <button className="btn btn-sm btn-primary rounded-pill text-dark py-0 px-3">
                    <NavLink
                      onClick={() => setOpen(!open)}
                      to="/users/login"
                      id="login-link"
                      className="nav-link text-dark font-weight-bold"
                      activeClassName="highlight"
                    >
                      Login
                    </NavLink>
                  </button>
                </li>
                <li className="nav-item my-3">
                  <button className="btn btn-sm btn-danger rounded-pill text-dark py-0 px-3">
                    <NavLink
                      to="/home"
                      className="nav-link text-light font-weight-bold"
                      activeClassName="highlight"
                      onClick={logout}
                    >
                      Logout
                    </NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </nav>

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
              <small className="text-dark m-0">properties</small>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/about"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={aboutGlyph} alt="about us" />
              <small className="text-dark m-0">about</small>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/contact"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={contactGlyph} alt="contact us" />
              <small className="text-dark m-0">contact</small>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
