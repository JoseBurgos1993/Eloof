import React from 'react'
import FlipCountdown from '../Countdown'
import {
  Button,
  Container,
  Header,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import axios from "axios";
/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    {
    <Header as='h2'>
      <p style={{ marginTop:'1.5em', marginBottom:'2em' }}><Image size='medium' src='./eloof.png' centered/></p>
    </Header>
    }
    <Header
      as='h2'
      content='Countdown'
      inverted
      style={{
        marginBottom: '1.5em',
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    >
    <p style={{ margin: '1em 1em'}}><i>It's almost Christmas...</i></p>
    <FlipCountdown />
    </Header>
    <Button size='huge' color='red' as={ Link } to='/register'>
      Register with Santa Now!
    </Button>
  </Container>
);

const Landing = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };
  return (
    <div>
      <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical >
        <Menu inverted pointing secondary size='large' >
          {state.user ? (
            <Container>
              <Menu.Item as={ Link } active to='/' > Home </Menu.Item>
              <Menu.Item as={ Link } to='/profile' > Profile </Menu.Item>
              <Menu.Item as={ Link } to='/wishbook' >Wishbook</Menu.Item>
              <Menu.Item as={ Link } to='/' >Ask-A-Elf</Menu.Item>
              <Menu.Item position='right'>
                <Button onClick={logout} > Log Out </Button>
              </Menu.Item>
            </Container>
          ) : (
            <Container>
              <Menu.Item as={ Link } active to='/' > Home </Menu.Item>
              <Menu.Item as={ Link } to='/' >Ask-A-Elf</Menu.Item>
              <Menu.Item position='right'>
                <Button as={ Link } to='/login' inverted> Log In </Button>
                <Button as={ Link } to='/register' inverted style={{ marginLeft: '0.5em' }}> Sign Up </Button>
              </Menu.Item>
            </Container>
          )}
        </Menu>
        <HomepageHeading />
      </Segment>
    </div>
  );
}
export default Landing