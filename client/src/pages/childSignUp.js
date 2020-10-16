import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormContainer from "../components/FormContainer"

const ChildSignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users', {
        username: signUpCreds.username,
        password: signUpCreds.password,
        usertype: "believer",
        wishlist: [],
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{marginLeft: "auto", textAlign: "center",marginRight: "auto"}}>
        <FormContainer content="believerSignUp"/>
    </div>
  );
};

export default ChildSignUp;