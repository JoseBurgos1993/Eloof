import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
/*
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
                <Menu.Item text='red' as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item color='red' as='a'>Profile</Menu.Item>
                <Menu.Item color='red' as='a'>Wishbook</Menu.Item>
                <Menu.Item as='a'>Ask-A-Elf</Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                        Log in
                    </Button>
                    <Button as='a' inverted={!fixed} style={{ marginLeft: '0.5em' }}>
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
class MobileContainer extends Component {
  state = {}
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item color='red' as='a' active>
              Home
            </Menu.Item>
            <Menu.Item color='red' as='a'>Profile</Menu.Item>
            <Menu.Item color='red' as='a'>Wishbook</Menu.Item>
            <Menu.Item color='red' as='a'>Ask-A-Elf</Menu.Item>
            <Menu.Item color='red' as='a'>Log in</Menu.Item>
            <Menu.Item color='red' as='a'>Sign Up</Menu.Item>
            <Menu.Item color='red' as='a'>Sign Up</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                   <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const Landing = () => (
  <ResponsiveContainer/>
)
*/
const Landing = () => (
  <div>Landingpart</div>
);
export default Landing