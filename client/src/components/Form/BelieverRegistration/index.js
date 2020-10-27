import React, { Component } from "react";
import {  Card, Grid, Button } from "semantic-ui-react";
import axios from "axios";

class BelieverRegistration extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();

    axios
      .post("/api/users", {
        username: this.props.values.childEmail,
        password: this.props.values.childPassword,
        usertype: "believer",
        childName: this.props.values.childName,
        childAge: this.props.values.childAge,
        childGrade: this.props.values.childGrade,
        childLanguage: this.props.values.childLanguage,
      })
      .then((response) => {
        if (!response.data.error) {
          console.log("Account Created");
          window.location.replace("/login");
        } else {
          alert("User ID is already taken!"); //alert user, ID taken
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });

  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { childName, childPassword, childAge, childGrade, childLanguage, childEmail, childLocation, santaNote },
    } = this.props;

    return (
      <div>
        <h1 className="ui centered">Confirm you letter to Santa</h1>
        <br></br>
        <Grid centered>
          <Grid.Column> 
            <Card fluid color='red'>
              <Card.Content color='grey'>
                <h3>Email Draft to Santa</h3>
              </Card.Content>   
              <Card.Content>  
                <h3>Dear Santa,</h3>
                <br></br>
                <p> My name is {childName} and I am {childAge} years old.</p>
                <br></br>
                <p>I live in {childLocation}!</p>
                <br></br>
                <p>{santaNote}</p>
                <br></br>
                <p>Thank you for the presents!</p>
              </Card.Content> 
              <Card.Content></Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <br></br>
        <p>Please write down the email and password below! This gives you access to your personal wishlist!</p>
        <p> Email: {childEmail} and Password: {childPassword} </p>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Confirm</Button>
      </div>
    );
  }
}

export default BelieverRegistration;
