import React from 'react'
import { Link } from 'react-router-dom';
import { Header,Button, Divider, Grid, Image, Segment } from 'semantic-ui-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Register = () => (
<div>
<Navigation />
<Segment placeholder>
  <Grid columns={2} relaxed='very' stackable textAlign='center'>
    <Divider vertical>Or</Divider>
    <Grid.Column>
        <Header icon>
          <p>
          <Image size='medium' src='./images/snowman.png' />
          </p>
          <p>
          Are you A Believer?
          </p>
        </Header>
      <Button color='red' content='Start writing to Santa!' icon='signup' size='big' as={ Link } to="/believersignup" />
    </Grid.Column>

    <Grid.Column verticalAlign='middle'>
        <Header icon>
          <p>
          <Image size='medium' src='./images/elf.png' />
          </p>
          <p>
          Are You An Elf?
          </p>
        </Header>
      <Button color='red' content='Check in to the Workshop!' icon='signup' size='big' as={ Link } to="/elfsignup" />
    </Grid.Column>
  </Grid>

  <Divider vertical>Or</Divider>
</Segment>
<Footer />
</div>

)

export default Register;