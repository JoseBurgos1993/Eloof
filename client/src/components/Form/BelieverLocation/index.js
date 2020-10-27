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
        
        <Form>
                <h1 className="ui centered">Where do you live?</h1>
                <Form.Field>
                    <input
                    placeholder='What city do you live in...'
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
