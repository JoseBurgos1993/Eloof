import React from "react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FormBackground from "../components/Form/FormBackground";

const BelieverSignUp = () => {
  
  return(
    <div>
      <Navigation />
      <FormBackground />
      <Footer />
    </div>
  );
  /*
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
  */
};

export default BelieverSignUp;
