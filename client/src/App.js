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
import background from './images/smoky-background.jpg';
import logo from './images/smg-logo-blue-cabin-only.png';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

const App = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/home');
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <NavLink to="/home" className="navbar-brand">
          <img src={logo} alt="smoky mountain getaways" />
        </NavLink>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          className="navbar-toggler bg-transparent border-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Fade in={open}>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="show navbar-nav">
              <li className="nav-item active">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to="/home"
                  className="nav-link text-dark"
                  activeClassName="highlight"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to="/properties"
                  className="nav-link text-dark"
                  activeClassName="highlight"
                >
                  Our Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setOpen(!open)}
                  to="/about"
                  className="nav-link text-dark"
                  activeClassName="highlight"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm btn-primary rounded-pill text-dark py-0 px-3">
                  <NavLink
                    to="/users/login"
                    id="login-link"
                    className="nav-link text-dark font-weight-bold"
                    activeClassName="highlight"
                  >
                    Login
                  </NavLink>
                </button>
              </li>
              <li className="nav-item">
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
        </Fade>
      </nav>

      <div className="background-wrapper">
        <img
          src={background}
          alt="smoky mountains background"
          className="bg-img"
        />
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
              <h6 className="text-dark m-0">properties</h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/about"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={aboutGlyph} alt="about us" />
              <h6 className="text-dark m-0">about</h6>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/contact"
              className="my-1 d-flex flex-column align-items-center"
            >
              <img src={contactGlyph} alt="contact us" />
              <h6 className="text-dark m-0">contact</h6>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
