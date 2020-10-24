import React, { Component } from 'react'
import FlipCountdown from '../Countdown'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";
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
      <Icon name='right arrow' />
    </Button>
  </Container>
)
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    return (
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              inverted
              pointing
              secondary
              size='large'
            >
              <Container>
                <Menu.Item text='red' as={ Link } to='/' active>
                  Home
                </Menu.Item>
                <Menu.Item color='red' as={ Link } to='/profile' >Profile</Menu.Item>
                <Menu.Item color='red' as={ Link } to='/wishbook'>Wishbook</Menu.Item>
                <Menu.Item as={ Link } to='/'>Ask-A-Elf</Menu.Item>
                <Menu.Item position='right'>
                    <Button as={ Link } to='/login' inverted>
                        Log in
                    </Button>
                    <Button as={ Link } to='/register' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
    )
  }
}
const Landing = () => (
  <DesktopContainer/>
)
export default Landing