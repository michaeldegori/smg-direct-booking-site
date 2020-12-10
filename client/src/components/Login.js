import React, { useState } from 'react';
import Axios from 'axios';
import useHistory from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:3000/users/login', userLogin)
      .then((response) => {
        console.log('User logged in!');
        history.push(`/properties`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          name="email"
          placeholder="email"
          value={userLogin.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userLogin.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
