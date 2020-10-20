import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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
        console.log("login username = ", loginCreds.username);
        console.log("login password = ", loginCreds.password);
        axios.post('/api/users/login', {
            username: loginCreds.username,
            password: loginCreds.password,
        }).then((response) => {
            if (response.status === 200) {
            dispatch({ type: SET_USER, user: response.data });
            history.replace('/profile');
            }
        }).catch((error) => {
            console.log('login error: ');
            //alert("Wrong username or password. Try again please.");
            console.log(error);
        });
    };
  
    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/eloof.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input 
                            fluid icon='user' 
                            iconPosition='left' 
                            placeholder='E-mail address'
                            onChange={handleChange}
                            type='email'
                            name="username"
                            value={loginCreds.username}
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
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='/register'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    );
  
}
export default LoginForm