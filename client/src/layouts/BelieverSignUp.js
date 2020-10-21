import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../store/store";
import { LOADING, SET_USER } from "../store/actions";
import {
  Header,
  Button,
  Divider,
  Form,
  Grid,
  Icon,
  Segment,
  Image,
  Message,
} from "semantic-ui-react";
import BelieverForm from "../components/BelieverForm";

const BelieverSignUp = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleLogin = () => {
    //dispatch({ type: LOADING });

    axios
      .post("/api/users/login", {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace("/profile");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users", {
        username: signUpCreds.username,
        password: signUpCreds.password,
        usertype: "believer",
      })
      .then((response) => {
        if (!response.data.error) {
          console.log("Account successfully created.");
        } else {
          console.log("USERNAME TAKEN");
        }
      })
      .then(handleLogin)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/eloof.png" /> Log-in to your account
        </Header>
        <BelieverForm></BelieverForm>
        {/* <Form size="large">
          <Segment stacked>
                        <Form.Input 
                            fluid icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address'
                            onChange={handleChange}
                            type='email'
                            name="username"
                            value={signUpCreds.username}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name="password"
                            type='password'
                            onChange={handleChange}
                        />
                        <Button color='teal' fluid size='large' onClick={handleSubmit}>
                            Sign up
                        </Button>
                    </Segment>
        </Form> */}
        {/* <Message>
          Already have an account? <a href="/login">Sign Up</a>
        </Message> */}
      </Grid.Column>
    </Grid>
  );
};

export default BelieverSignUp;
