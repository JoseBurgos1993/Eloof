import axios from 'axios';
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import LogOutButton from '../components/LogOutButton';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
//import Countdown from '../components/Countdown'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    {
    <Header as='h2'>
      <Image size='massive' src='./eloof.png' />
    </Header>
    }
    <Header
      as='h2'
      content='Countdown'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button size='huge' color='red' as={ Link } to="/register">
      Register with Santa
      <Icon name='right arrow' />
    </Button>
  </Container>
)
HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  handleMenuClick = (route) => {

  };
  render() {
    const { children } = this.props
    const { fixed } = this.state

    
    //let [state, dispatch] = useStoreContext();
    //const history = useHistory();

    const logout = (event) => {
      event.preventDefault();
      /*
      console.log("log out was pressed");
      dispatch({ type: LOADING });
      axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          //history.replace('/login');
        }
      }).catch((error) => {
        console.log('Logout error');
      })*/
    };
    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            color="green"
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em' }}
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
                <Menu.Item active text='red' as={ Link } to="/" name="Home" />
                <Menu.Item color='red' as={ Link } to="/Profile" name="Profile" />
                <Menu.Item color='red' as={ Link } to="/Wishbook" name="Wishbook" />
                <Menu.Item as='a' as={ Link } to="/FAQ" name="Ask-A-Elf" />
                <Menu.Item position='right'>
                  <Button color='red' as={ Link } to="/login" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button color='red' as={ Link } to="/register" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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
    //const [state, dispatch] = useStoreContext();
    //const history = useHistory();

    const { children } = this.props
    const { sidebarOpened } = this.state
    /*
    const logout = (event) => {
      event.preventDefault();
      console.log("log out was pressed");
      dispatch({ type: LOADING });
      axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          //history.replace('/login');
        }
      }).catch((error) => {
        console.log('Logout error');
      })
    };
    */
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
            <Menu.Item color='red' as={ Link } to="/profile">Profile</Menu.Item>
            <Menu.Item color='red' as={ Link } to="/wishbook">Wishbook</Menu.Item>
            <Menu.Item color='red' as={ Link } to="/FAQ">Ask-A-Elf</Menu.Item>
            <Menu.Item color='red' as={ Link } to="/login">Log in</Menu.Item>
            <Menu.Item color='red' as={ Link } to="/register">Sign Up</Menu.Item>
            <Menu.Item color='red' as={ Link } to="/register">Sign Up</Menu.Item>
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
                    <Button as={ Link } to="/login" inverted>
                      Log in
                    </Button>
                    <Button as={ Link } to="/register" inverted style={{ marginLeft: '0.5em' }}>
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
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Santa has gone digital…
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Register with eloof to create a wishlist, send a letter to Santa, check your naughty or nice status, and more! 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='large' important src='./santa.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column textAlign='center'>
            <Icon link size='huge' color='red' name='chevron up' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Image size='large' src='./gift.png' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Tell Santa exactly what you want!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Look through our universal wishbook to send Santa you wishlist!  
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column textAlign='center'>
            <Button as='a' color='red' size='large'>
              Search our Wishbook!
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Container>
        <Divider className='header'horizontal style={{ margin: '3em 0em', textTransform: 'uppercase', color: 'red', fontSize:'2em' }}>
          <h2>Ask-A-Elf</h2>
        </Divider>
        <Grid.Row verticalAlign='middle' columns={4} centered>
          <Grid.Column>
              <Image size='medium' src='/elf.png' style={{ padding: '2em 0em' }} centered />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='middle' width={6} centered>
          <Grid.Column  textAlign='center'>
          <p style={{ fontSize: '1.33em' }}>
          Want to know how Santa travels around the world in one night? Can't get your gifts added to your list? Want to know the status of your naughty appeal to Santa? 
          </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='middle' columns={4} centered>
          <Grid.Column style={{ padding: '2em 0em' }}>
          <Button as='a' color='red' size='large'>
            Chat with an elf!
          </Button>
          </Grid.Column>
        </Grid.Row>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default Homepage