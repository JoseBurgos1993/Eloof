import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BelieverName extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">What is your name?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Your first name'
                    onChange={this.props.handleChange('childName')}
                    defaultValue={values.childName}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverName;
