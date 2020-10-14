import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BelieverLocation extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">What do you live?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Enter the city you live in'
                    onChange={this.props.handleChange('childLocation')}
                    defaultValue={values.childLocation}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverLocation;

