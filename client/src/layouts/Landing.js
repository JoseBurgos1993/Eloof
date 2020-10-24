import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FlipCountdown from '../components/Countdown'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

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
    <Button size='huge' color='red'>
      Register with Santa Now!
      <Icon name='right arrow' />
    </Button>
  </Container>
)
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
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
                    <Button as={ Link } to='/login' inverted={!fixed}>
                        Log in
                    </Button>
                    <Button as={ Link } to='/register' inverted={!fixed} style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Media>
    )
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const Landing = () => (
  <ResponsiveContainer/>
)

export default Landing