import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Visibility,
} from 'semantic-ui-react'
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                        <List.Item as='a'>Sitemap</List.Item>
                        <List.Item as='a'>Customer Service</List.Item>
                        <List.Item as='a'>Careers</List.Item>
                    </List>
                    <Header inverted as='h4' content='Contact Us' />
                    <List link inverted>
                        <List.Item as='a'>Email</List.Item>
                        <List.Item as='a'>Facebook</List.Item>
                        <List.Item as='a'>Twitter</List.Item>
                        <List.Item as='a'>Instagram</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Header inverted as='h4' content='For Believers' />
                    <List link inverted>
                        <List.Item as='a'>Personal Wishlist</List.Item>
                        <List.Item as='a'>Ask-A-Elf</List.Item>
                        <List.Item as='a'>Naughty Appeal Form</List.Item>
                    </List>
                    <Header inverted as='h4' content='For Elves' />
                    <List link inverted>
                        <List.Item as='a'>Personal Account</List.Item>
                        <List.Item as='a'>Listings</List.Item>
                        <List.Item as='a'>Elf Aid Application</List.Item>
                        <List.Item as='a'>Elf Assistance</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Header inverted as='h4' content='For Elf Workshops' />
                    <List link inverted>
                        <List.Item as='a'>Workshop Account</List.Item>
                        <List.Item as='a'>Workshop Guidelines</List.Item>
                        <List.Item as='a'>Toy-raising Guidelines</List.Item>
                        <List.Item as='a'>Workshop Assistance</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <Header as='h4' inverted>
                        Elf Joke of the Day
                    </Header>
                    <br></br>
                    <p>
                    What did the elf say was the first step in using a Christmas computer?
                    </p>
                    <br></br>
                    <p>
                    "First, YULE LOGon"!"First, YULE LOGon"!
                    </p>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
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
  render() {
    const { children } = this.props
    return (
        <Media at='mobile'>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
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
          </Visibility>
          {children}
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
const Footer = () => (
  <ResponsiveContainer />
)
export default Footer