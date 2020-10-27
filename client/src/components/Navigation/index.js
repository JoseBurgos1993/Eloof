import React from 'react'
import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import axios from "axios";
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const Navigation = () => {
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
    <Menu pointing secondary size='large' >
      {state.user ? (
        <Container>
          <Menu.Item as={ Link } to='/' > Home </Menu.Item>
          <Menu.Item as={ Link } to='/profile' > Profile </Menu.Item>
          <Menu.Item as={ Link } to='/wishbook' >Wishbook</Menu.Item>
          <Menu.Item as={ Link } to='/' >Ask-A-Elf</Menu.Item>
          <Menu.Item position='right'>
            <Button onClick={logout} > Log Out </Button>
          </Menu.Item>
        </Container>
      ) : (
        <Container>
          <Menu.Item as={ Link } to='/' > Home </Menu.Item>
          <Menu.Item as={ Link } to='/' >Ask-A-Elf</Menu.Item>
          <Menu.Item position='right'>
            <Button as={ Link } to='/login' > Log In </Button>
            <Button as={ Link } to='/register' style={{ marginLeft: '0.5em' }}> Sign Up </Button>
          </Menu.Item>
        </Container>
      )}
    </Menu>
  );
};

export default Navigation