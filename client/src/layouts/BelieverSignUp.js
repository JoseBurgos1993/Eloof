import React from "react";
import {
  Header,
  Grid,
  Image,
} from "semantic-ui-react";
import BelieverForm from "../components/BelieverForm";

const BelieverSignUp = () => {

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/eloof.png" /> Log-in to your account
        </Header>
        <BelieverForm></BelieverForm>
      </Grid.Column>
    </Grid>
  );
};

export default BelieverSignUp;
