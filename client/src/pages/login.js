import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import "./style.css";

const Login = () => {
  return (
    <div className="text-center bodyContainer">
      <h4>Login</h4>
      <FormContainer content="login"/>
    </div>
  );
};
export default Login;