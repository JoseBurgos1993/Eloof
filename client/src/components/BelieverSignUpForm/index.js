import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from '../../store/store';
import { LOADING, SET_USER } from '../../store/actions';

const BelieverSignUpForm = () => {
    const [, /* state */ dispatch] = useStoreContext();
    const history = useHistory();

    const [signUpCreds, setSignUpCreds] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignUpCreds({ ...signUpCreds, [name]: value });
    };

    const handleLogin = () => {
        //dispatch({ type: LOADING });

        axios.post('/api/users/login', {
            username: signUpCreds.username,
            password: signUpCreds.password,
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

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({ type: LOADING });

        axios.post('/api/users', {
            username: signUpCreds.username,
            password: signUpCreds.password,
            usertype: "believer",
        }).then((response) => {
            if (!response.data.error) {
                history.replace('/login');
            } else {
                console.log('USERNAME TAKEN');
            }
        }).then(handleLogin).catch((error) => {
            console.log(error);
        });
    };
    
    return(
        <form className="form-signin">
            <label htmlFor="inputEmail" className="sr-only"> Email address </label>
            <input
                type="email"
                id="inputEmail"
                className="form-control"
                name="username"
                placeholder="Email address"
                value={signUpCreds.username}
                onChange={handleChange}
            />
            <label htmlFor="inputPassword" className="sr-only"> Password </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                name="password"
                placeholder="Password"
                value={signUpCreds.password}
                onChange={handleChange}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}> Sign Up </button>
        </form>
    );
};
export default BelieverSignUpForm;