import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    return (
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
    )
  }
}
const Footer = () => (
  <DesktopContainer />
)
export default Footer