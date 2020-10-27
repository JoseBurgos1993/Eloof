import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class BelieverEmail extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form>
        <h1 className="ui centered">What is your parent's email and password?</h1>
        <Form.Field>
          <label></label>
          <input
            placeholder="Your Email"
            onChange={this.props.handleChange("childEmail")}
            defaultValue={values.childEmail}
          />
        </Form.Field>
        <Form.Field>
          <label></label>
          <input
            type="password"
            placeholder="Your Password"
            onChange={this.props.handleChange("childPassword")}
            defaultValue={values.childPassword}
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default BelieverEmail;
