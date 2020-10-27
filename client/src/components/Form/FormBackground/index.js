import React from 'react'
import BelieverForm from '../BelieverForm'
import { Header, Image, Segment, Grid, Container } from 'semantic-ui-react'

const FormBackground = () => (
  <div>
    <Grid columns={3}>
      <Grid.Column width={7} textAlign='centered'>
    <Header as='h2'>
      <p style={{ marginTop:'1.5em', marginBottom:'2em' }}><Image size='small' src='./images/eloof.png' centered/></p>
    </Header>
    <Segment.Inline style={{ marginBottom:'6em' }}>
      <BelieverForm />
    </Segment.Inline>
    </Grid.Column>
    </Grid>
  </div>
)

export default FormBackground