import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BelieverGrade extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">What grade are you in?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Your grade in school'
                    onChange={this.props.handleChange('childGrade')}
                    defaultValue={values.childGrade}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverGrade;
