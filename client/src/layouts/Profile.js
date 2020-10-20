import axios from 'axios';
import React, { useEffect } from 'react'
import {
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button, 
  Form,
} from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
//import { listIndexes } from '../../../database/models/user';

const src = './christmas.png'

const Profile = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const list=["potato","apple","corn"];
  console.log("state.user", state.user)
  /*
  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        //history.push('/login');
      }
    });
  }, [dispatch, history]);
  */
  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('Logout error');
      });
  };
  const handleSubmit = () => {
    alert("Pressed Submit");
  };
  const getPublic = () => {
    alert("Pressed Public");
  };
  return(
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            eloof
          </Menu.Item>
          <Menu.Item as={ Link } to="/" >Home</Menu.Item>
          <Menu.Item as={ Link } to="/profile" >Profile</Menu.Item>
          <Menu.Item as={ Link } to="/wishbook" >WishBook</Menu.Item>
          <Menu.Item as={ Link } to="/FAQ" >Ask-A-Elf</Menu.Item>
          <Menu.Item position='right'>
            <Button color='red' onClick={logout}>
              Log Out
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
      <Container text style={{ marginTop: '7em' }}>
      <div>
        <Header as='h2' icon textAlign='center'>
        <Image
          centered
          circular
          size='large'
          src='./christmas.png'
          style={{ marginBottom: '2em'}}
        />
        <Header.Content>Happy Holidays {state.user.username}. You're an {state.user.usertype} !</Header.Content>
        </Header>
      </div>
      {state.user.usertype === "elf" ? (
        <div>
          <Grid.Row>
            <Grid.Column width={4} centered>
              <Form>
                <Form.Field>
                  <label>Child's Name</label>
                  <input placeholder='Name' />
                </Form.Field>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={getPublic}>Or View Public Listings</Button>
              </Form>
              
            </Grid.Column>
          </Grid.Row>
          <Card.Group style={{ marginTop: '2em' }} itemsPerRow={3}>
            {list.map((res,index) => (
              <h1>{res}, {index}</h1>
            ))}
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
          </Card.Group>
        </div>
      ) : (
        <div>
        
        <Grid.Row>
          <Grid.Column width={4} centered>
            <p>childAge | childLocation</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row color='red' style={{ marginTop:'1em'}}>
          <Grid.Column width={4} centered>
            <p>Naughty</p>
          </Grid.Column>
        </Grid.Row>
          <Card.Group style={{ marginTop: '2em' }} itemsPerRow={3}>
            {list.map((res,index) => (
              <h1>{res}, {index}</h1>
            ))}
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
          </Card.Group>
        </div>
      )}
      </Container>
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid>
          <Divider inverted section />
          <Image centered size='mini' src='/logo.png' />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};
export default Profile