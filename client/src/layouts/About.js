import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
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

class DesktopContainer extends Component {
  render() {
    return (
    <Media greaterThan='mobile'>
    <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
    >
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
        <Divider as='h4'className='header'horizontal style={{ margin: '3em 0em', textTransform: 'uppercase', color: 'red', fontSize:'2em' }}>
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
    </Visibility>
    </Media>
    )
  }
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer />
  </MediaContextProvider>
)
const About = () => (
  <ResponsiveContainer />
)

export default About