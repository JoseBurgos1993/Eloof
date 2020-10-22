import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import axios from "axios";

class BelieverRegistration extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    /////////////////////////////////////////////////////////////////////////////

    const handleLogin = () => {
      axios
        .post("/api/users/login", {
          username: this.props.values.childEmail,
          password: this.props.values.childPassword,
        })
        .then((response) => {
          if (response.status === 200) {
            window.location.replace("/profile");
          }
        })
        .catch((error) => {
          console.log("login error: ");
          console.log(error);
        });
    };

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
          handleLogin();
        } else {
          alert("User ID is already taken!"); //alert user, ID taken
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    /////////////////////////////////////////////////////////////////////////////
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { childName, childAge, childGrade, childLanguage, childEmail },
    } = this.props;

    return (
      <div>
        <h1 className="ui centered">Confirm you letter to Santa</h1>
        <p>
          Click Confirm if you would like to send the following information to
          Santa
        </p>
        <List>
          <List.Item>
            <List.Icon name="users" />
            <List.Content>Name: {childName}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="calendar" />
            <List.Content>Age: {childAge} years old</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>Grade: {childGrade}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>Language: {childLanguage}</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>Email: {childEmail}</List.Content>
          </List.Item>
        </List>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Confirm</Button>
      </div>
    );
  }
}

export default BelieverRegistration;
