import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import "./style.css";

const LoginForm = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios.post('/api/users/login', {
        username: loginCreds.username,
        password: loginCreds.password,
      }).then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace('/');
        }
      }).catch((error) => {
        console.log('login error: ');
        console.log(error);
      });
  };
  
  return (
    <form className="form-signin">
      <span>Already have an account? Login now!</span>
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        name="username"
        placeholder="Email address"
        value={loginCreds.username}
        onChange={handleChange}
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        name="password"
        placeholder="Password"
        value={loginCreds.password}
        onChange={handleChange}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
        Login
      </button>
      Not registered? 
      <Link to="/signup" className="btn btn-link">
        <span className="text-secondary">Create an account!</span>
      </Link>
    </form>
  );
}

export default LoginForm;
