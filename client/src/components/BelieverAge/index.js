import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BelieverAge extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">How old are you?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Your age'
                    onChange={this.props.handleChange('childAge')}
                    defaultValue={values.childAge}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverAge;
