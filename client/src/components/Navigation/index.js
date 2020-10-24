import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    return (
            <Menu
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item as={ Link } to='/' > Home </Menu.Item>
                <Menu.Item as={ Link } to='/' >About</Menu.Item>
                <Menu.Item as={ Link } to='/wishbook' >Wishbook</Menu.Item>
                <Menu.Item as={ Link } to='/' >Ask-A-Elf</Menu.Item>
                <Menu.Item position='right'>
                  <Button as={ Link } to='/login' > Log in </Button>
                  <Button as={ Link } to='/register' style={{ marginLeft: '0.5em' }}> Sign Up </Button>
                </Menu.Item>
              </Container>
            </Menu>
    )
  }
}
const Navigation = () => (
  <DesktopContainer />
)
export default Navigation