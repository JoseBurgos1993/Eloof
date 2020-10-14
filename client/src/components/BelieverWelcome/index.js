import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class BelieverWelcome extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Are you a believer?</h1>
                <Form.Field>
                    <label></label>
                    <input
                    placeholder='Yes or No'
                    onChange={this.props.handleChange('beilever')}
                    defaultValue={values.believer}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default BelieverWelcome;

