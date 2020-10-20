import React from 'react'
import { Link } from 'react-router-dom';
import { Header,Button, Divider, Form, Grid, Icon,Segment } from 'semantic-ui-react'

const Register = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable textAlign='center'>
      <Divider vertical>Or</Divider>
      <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Are you A Believer?
          </Header>
        <Button content='Start writing to Santa!' icon='signup' size='big' as={ Link } to="/believersignup" />
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
          <Header icon>
            <Icon name='search' />
            Are You An Elf?
          </Header>
        <Button content='Check in to the Workshop!' icon='signup' size='big' as={ Link } to="/elfsignup" />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default Register;