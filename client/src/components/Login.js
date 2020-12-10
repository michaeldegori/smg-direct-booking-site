import React from 'react';

const Login = () => {
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
      </form>
    </div>
  );
};

export default Login;
